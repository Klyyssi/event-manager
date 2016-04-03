var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var configDB = require("./config/database.js");
var getRouter = require("./app/routes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE");
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

var router = getRouter();

mongoose.connect(configDB.url);
app.use("/api", router);

app.listen(port);
console.log("Server is running at port " + port);
