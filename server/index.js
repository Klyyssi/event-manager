var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var configDB = require("./config/database.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

mongoose.connect(configDB.url);

router.get("/", function(req, res) {
	res.json({ message: "Hello world" });
});

app.use("/api", router);

app.listen(port);
console.log("Server is running at port " + port);
