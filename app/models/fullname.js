const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fullnameSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  }
});

const Fullname = mongoose.model("Fullname", fullnameSchema);
module.exports = Fullname;
