const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.options("*", cors());
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
    console.log("Error connecting to MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
const authRoute = require("./routes/auth.routes");
app.use("/api", authRoute);

//SERVER
const PORT = process.env.PORT || 1437;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
