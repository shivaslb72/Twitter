const express = require("express");
const router = express();
const axios = require("axios");
const tweetsController = require("../app/controller/tweetsController");
// const fullnamesConroller = require("../app/controller/fullnamesController");

router.get("/split/name", (req, res) => {
  console.log(req.query);
  let fullName = req.query.fullName;
  // console.log(fullName);
  const result = fullName.split(" ");
  const firstName = result[0];
  const lastName = result[result.length - 1];

  res.json({ firstName, lastName });
});

router.get("/calculate/age?", (req, res) => {
  const dob = req.query.dob;
  const value = dob.slice(0, 4);
  const num = Number(value);
  const year = new Date();
  const currentYear = year.getFullYear();
  const age = currentYear - num;
  console.log(age);
  res.json({ age });
});

//gender check
router.get("/user", (req, res) => {
  const name = req.query.name;
  axios
    .get(`https://api.genderize.io?name=${name}`)
    .then(response => {
      const gender = response.data.gender;
      res.json({ name, gender });
    })

    .catch(err => res.json(err));
});

router.get("/tweets", tweetsController.list);
module.exports = router;

// const getAge =  Math.floor((new Date() - new Date("1992-02-28").getTime()) / 3.15576e10);
