var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = new Schema({
	author: String,
  title: { type: String, required: true },
  eventStart: { type: Date, required: true },
  eventEnd: Date,
  additionalInfo: String
});

EventSchema.add({ location: {type: String, required: true} });

module.exports = mongoose.model("Event", EventSchema);

