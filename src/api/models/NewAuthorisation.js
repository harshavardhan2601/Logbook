var mongoose = require("mongoose");
var AuthSchema = new mongoose.Schema({
  sunset: {},
  aircraft: String,
  regMark: String,
  engine: String,
  instructor: {},
  student: {},
  routeFrom: String,
  routeTo: String,
  picBeforeFlight: String,
  authorisedInstructorSign: String,
  author_sign: {},
  departureHrs: String,
  departureMts: String,
  arrivalHrs: String,
  arrivalMts: String,
  dualHrs: String,
  dualMts: String,
  soloHrs: String,
  soloMts: String,
  signOfStudent: String,
  detailsOfExercise: String,
  noOfLandings: String,
  picAfterFlight: String,
  status: Number,
  remarks: String,
  created: { type: Date },
  modified: { type: Date, default: Date.now }
});

mongoose.model("NewAuthorisation", AuthSchema);
