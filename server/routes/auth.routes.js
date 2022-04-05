const router = require("express").Router();

const {
  register,
  login,
  verifyUserToken,
  getUser,
  updateUser,
  getPublicUser
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/get-user", verifyUserToken, getUser);
router.post("/update/user", verifyUserToken, updateUser);
router.get("/get/user/:username", getPublicUser);

module.exports = router;
