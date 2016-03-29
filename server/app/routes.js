var express = require("express");
var Reservation = require("./models/reservation.js");

module.exports = function() {
	
	var router = express.Router();

	router.get("/", function(req, res) {
		res.json({ message: "Hello world" });
	});

	router.route("/reservations")
		.post(function(req, res) {
			var reservation = new Reservation();
			reservation.email = req.body.email;
			reservation.reservationStart = req.body.reservationStart;
			reservation.reservationEnd = req.body.reservationEnd;

			reservation.save(function(err) {
				if (err) {
					res.send(err);
				}

				res.json({message: "Reservation created"});
				
			});
		});

	return router;
};
