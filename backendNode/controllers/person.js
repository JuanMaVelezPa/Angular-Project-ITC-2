"use strict";

var Person = require("../models/person");

var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "Home",
    });
  },

  test: function (req, res) {
    return res.status(200).send({
      message: "Test",
    });
  },

  savePerson: function (req, res) {
    var person = new Person();
    var request = req.body;

    person.firstName = req.body.firstName;
    person.lastName = request.lastName;
    person.address = request.address;
    person.phone = request.phone;
    person.birthDate = request.birthDate;

    person.save((error, personaStored) => {
      if (error)
        return res.status(500).send({
          message: "You have error stored the person.",
        });

      if (!personaStored)
        return res.status(404).send({
          message: "Dont have stored the person",
        });

      console.log(personaStored._id);
      return res.status(200).send({
        person: personaStored,
      });
    });
  },
};

module.exports = controller;
