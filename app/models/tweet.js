const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  username: {
    type: String
  },
  tweets: [
    {
      type: String
    }
  ]
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
