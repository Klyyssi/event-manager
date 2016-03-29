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
		})
		.get(function(req, res) {
			Reservation.find(function(err, reservations) {
				if (err) {
					res.send(err);
				}

				res.json(reservations);
			})
		});


	router.route("/reservations/:reservation_id")
		.delete(function(req, res) {
			Reservation.remove({
				_id: req.params.reservation_id
			}, function(err, reservation) {
				if (err) {
					res.send(err);
				}

				res.json({message: "Reservation deleted" });		
			}			  
		)});

	return router;
};
