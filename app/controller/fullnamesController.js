const Fullname = require("../models/fullname");

module.exports.list = (req, res) => {
  Fullname.find()
    .then(fullname => {
      res.json(fullname);
    })
    .catch(err => {
      res.json(err);
    });
};
