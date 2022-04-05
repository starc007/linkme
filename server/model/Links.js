const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  insta: {
    type: String,
  },
  facebook: {
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

module.exports = mongoose.model("Link", LinkSchema);
