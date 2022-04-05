const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  avitar: {
    type: String,
  },
  insta: {
    type: String,
  },
  twitter: {
    type: String,
  },
  youtube: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  behance: {
    type: String,
  },
  medium: {
    type: String,
  },
  portfolio: {
    type: String,
  },
  hashnode: {
    type: String,
  },
  dribble: {
    type: String,
  },
  walletAddress: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
