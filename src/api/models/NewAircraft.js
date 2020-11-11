var mongoose = require("mongoose");
var NewaircraftSchema = new mongoose.Schema({
  airframe: [],
  enginedetailsselect: String,
  //engine1//
  engine1: [],
  oilcooler: [],
  fuelprimer: [],
  rpmgaugeone: [],
  mapgauge: [],
  prop1: [],
  engine1Lycoming: [],
  fuelflowtype: [],
  fuelshut1: [],
  fuelshut2: [],
  magnetos1: [],
  alternator1: [],
  starter1: [],
  temperaturegaugeone: [],
  oilpressuregaugeone: [],
  //engine 2//
  engine2: [],
  rpmgaugetwo: [],
  mapgaugetwo:[],
  prop2: [],
  engine2Lycoming: [],
  carburetors2: [],
  magnetos2: [],
  alternator2: [],
  starter2: [],
  temperaturegaugetwo: [],
  oilpressuregaugetwo: [],
  //accessories//
  trimtab: [],
  brakemaster: [],
  noseoleo: [],
  eltmain: [],
  remoteswitch: [],
  oilpressure:[],
  fuelhose:[],
  landinglightswitch: [],
  beaconlight: [],
  magneticcompass: [],
  fuelquantity: [],
  gyrohorizon: [],
  freeAirTempGauge: [],
  ammeter: [],
  vhf: [],
  adfone: [],
  elt: [],
  fuelqtyindicating: [],
  throttlecontrol: [],
  mixturecontrol: [],
  carburettor: [],
  vaccumpump: [],
  vaccumcentral: [],
  aircraftbattery: [],
  //aireframe//
  air_frame:[],
  fueltank:String,
  fuel_quality_gauge:String,
  fuel_quantity:[],
  airspeed: [], 
  altimeter: [],
  artificialhorizon:[],
  directionalgyro: [],
  vsi: [],
  turncoordinator: [],
  suctiongauge1: [],
  suctiongauge2: [],
  //avoionics//
  vor1:[],
  vor2:[],
  gps:[],
  dme:[],
  autopilot:[],
  transpender:[],
  audiopanel:[],
  hsi:[],
  fd:[],
  adftwo: [],
  eltone: [],
  wxradar:[],
  adsb:[],
  antenna:[],
  //electrical//
  battery1:[],
  battery2:[],
  battery3:[],
  ignitionswitch1: [],
  ignitionswitch2: [],
  masterswitch1:[],
  masterswitch2:[],
  alternateswitch1:[],
  alternateswitch2:[],
  alternatecontrolunit1:[],
  alternatecontrolunit2:[],
  // propellersensenich: [],
  // propellermc: [],
  //  starterskytek: [],
  //  brakehoses: [],
   status: Number,
  created: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("NewAircraft", NewaircraftSchema);