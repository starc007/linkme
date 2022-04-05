const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../model/User");
const Links = require("../model/Links");

const usernameGenerator = (email) => {
  const user = email.split("@")[0];
  let randomnum = Math.floor(Math.random() * 1000000 + 1000);
  const username = user + randomnum;
  return username;
};

exports.verifyUserToken = async (req, res, next) => {
  let token = req.headers.auth_link;
  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    token = token.replace(/^"(.*)"$/, "$1"); // Remove Bearer from string

    if (token === "null" || !token)
      return res.status(401).send("Unauthorized request");

    let verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verifiedUser) return res.status(401).send("Unauthorized request");
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

exports.register = async (req, res) => {
  const { tokenId, avitar } = req.body;
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  if (payload.email_verified) {
    const { name, email } = payload;
    const user = await User.findOne({ email });
    if (user) {
      res
        .status(400)
        .send({ message: "Email Already Exists!! Please Sign in" });
      return;
    } else {
      const username = usernameGenerator(email);
      const newUser = new User({
        name,
        email,
        username,
        avitar,
      });
      await newUser.save();
      const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET, {
        expiresIn: "2d",
      });
      res.header("auth_link", token).send({
        message: "Registered Successfully",
        user: newUser,
        token: token,
      });
    }
  }
};

exports.login = async (req, res) => {
  const { tokenId } = req.body;
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  if (payload.email_verified) {
    const { email } = payload;
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "2d",
      });

      res.header("auth_link", token).send({
        message: "Logged in Successfully",
        user: user,
        token: token,
      });
    } else {
      res
        .status(400)
        .send({ message: "Email is not registered !! Please Signup" });
    }
  }
};

exports.getUser = async (req, res) => {
  try {
    if (!req.user._id)
      return res.status(400).send({ message: "Unauthenticated" });
    const user = await User.findById(req.user._id);
    res.send(user);
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    if (!req.user._id)
      return res.status(400).send({ message: "Unauthenticated" });
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );
    await user.save();
    res.send({ message: "Information Added!!", user });
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
};

exports.getPublicUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.send(user);
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
}
