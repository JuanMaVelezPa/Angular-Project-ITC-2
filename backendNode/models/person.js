"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PersonSchema = Schema({
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  birthDate: String,
});

module.exports = mongoose.model("Person", PersonSchema);
