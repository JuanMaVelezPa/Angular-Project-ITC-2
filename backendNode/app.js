"user strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var projectRoutes = require("./routes/person");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/person", projectRoutes);

// app.get("/test", (req, res) => {
//   res.status(200).send({ message: "this is a test with NodeJS" });
// });

// app.get("", (req, res) => {
//   res.status(200).send({ message: "this is a other test with NodeJS" });
// });

// app.post("/test/:key", (req, res) => {
//   console.log(req.body.firstName);
//   console.log(req.body.lastName);
//   console.log(req.query.id);
//   console.log(req.params.key);
//   res.status(200).send({
//     message: "Post service",
//   });
// });

module.exports = app;
