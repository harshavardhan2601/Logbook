var mongoose = require("mongoose");
var PilotLogbookSchema = new mongoose.Schema({
  sunset: {},
  aircraft_type: String,
  register_number: String,
  engine_type: String,
  instructor: {},
  student: {},
  route_from: String,
  route_to: String,
  PIC_before_flight: String,
  sign_of_author: String,
  pilot_authorization: {},
  departure_hr: String,
  departure_min: String,
  arrival_hr: String,
  arrival_min: String,
  dual_hr: String,
  dual_min: String,
  solo_hr: String,
  solo_min: String,
  sign_of_student: String,
  no_of_exercise: String,
  no_of_landings: String,
  PIC_after_flight: String,
  remarks_flight: String,
  status: Number,
  created: { type: Date },
  modified: { type: Date, default: Date.now }
});

mongoose.model("pilot_logbook", PilotLogbookSchema);
