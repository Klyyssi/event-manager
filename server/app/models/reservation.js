var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
	email: String,
	reservationStart: Date,
	reservationEnd: Date
});

module.exports = mongoose.model("Reservation", ReservationSchema);

