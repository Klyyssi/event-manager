var express = require("express");
var Event = require("./models/event.js");

module.exports = function() {

	var router = express.Router();

	router.get("/", function(req, res) {
		res.json({ message: "Hello world" });
	});

	router.route("/events")
		.post(function(req, res) {
			var event = new Event();
			event.author = req.body.author;
      event.title = req.body.title;
			event.eventStart = req.body.eventStart;
			event.eventEnd = req.body.eventEnd;
      event.additionalInfo = req.body.additionalInfo;
      event.location = req.body.location;

			event.save(function(err) {
				if (err) {
					res.send(err);
				}

				res.json({message: "Event created"});

			});
		})
		.get(function(req, res) {
			Event.find(function(err, events) {
				if (err) {
					res.send(err);
				}

				res.json(events);
			})
		});


	router.route("/events/:event_id")
		.delete(function(req, res) {
			Event.remove({
				_id: req.params.event_id
			}, function(err, event) {
				if (err) {
					res.send(err);
				}

				res.json({message: "Event deleted" });
			}
		)});

	return router;
};
