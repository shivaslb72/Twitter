const Tweet = require("../models/tweet");
const Twitter = require("twitter");
const client = new Twitter({
  consumer_key: "V4GwIfdvNnCtLYlM6XXj9HrFG",
  consumer_secret: "gUNpJrVC2ZWZAcIfCaDV4vzamFLkd4c4P6A2ZuRTToXZcNFeFs",
  access_token_key: "793887106825412608-bjRsK1kicfX3V0xe9JCb3jidbxgvVt6",
  access_token_secret: "WkaEFEYRceqckATlqXGXifPELjO7hD03r87fdfshzYct4"
});

module.exports.list = (req, res) => {
  const username = req.query.username;
  Tweet.findOne({ username })
    .then(tweets => {
      if (tweets) {
        console.log(tweets);
        res.json(tweets);
      } else {
        client.get(
          `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=@${username}&count=10`,
          function(error, tweets, response) {
            const data = tweets.map(tweet => tweet.text);
            const tweet = new Tweet({ username, tweets: data });
            console.log(tweets);
            //tweet.tweets = data;
            //tweets.username = username;
            tweet.save().then(tweets => res.send(tweets));
          }
        );
      }
    })
    .catch(err => res.send(err));
};
