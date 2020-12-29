const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
var Users = require("../models/Users");
var NewStudent = require("../models/NewStudent");
var NewInstructor = require("../models/NewInstructor");
var NewAircraft = require("../models/NewAircraft");
var NewAuthorisation = require("../models/NewAuthorisation");
var NewData = require("../models/NewData");
var NewLocation = require('../models/NewLocation');
var NewStaff = require('../models/NewStaff');
var Aircraft = require('../models/aircraft_list');
var Aircraftmaintence = require('../models/aircraftmainten');
var States = require('../models/states');
var Sunset = require('../models/sunset_time');
var Hours = require('../models/hours');
var user_model = require('../models/user_model');
var pilot_logbook = require('../models/pilot_logbook');

router.post('/login', function (req, res, next) {
    var reqs = req.body;
    let userObj= {
      email: reqs.email,
      password: reqs.password,
      role_id:0
    }
    mongoose.model('Users').create(userObj, (err, dataObj) => {
      if (err) { console.log(err) }
      else {
        res.json(dataObj);
      }
    });
  });

// router.post('/login', function (req, res, next) {
//     var reqs = req.body;
//     mongoose.model('Users').findOne({ email: reqs.email, password: reqs.password }, function (err, dataObj) {
//         if (err) {
//             console.log(err);
//         } else {
//             if (dataObj) {
//                 // console.log(dataObj);
//                 var userObj = dataObj;
//                 req.session.user_id = userObj._id;
//                 req.session.email_id = dataObj.email;
//                 req.session.role_id = dataObj.role_id;
//                 console.log(req.session.role_id);
//                 console.log(req.session.email_id);
//                 res.json(userObj);
//             }
//             else {
//                 res.send({ status: 2, massage: 'Failure' });
//             }

//         }
//     })
// });

//pin generate//
function ticketid(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

router.get('/LocationList', function (req, res, next) {
    console.log(req.session.user_id);
    var role_id = req.session.role_id;
    try {
        mongoose.model('NewLocation').find({}, function (err, loc_Obj) {
            if (err) { console.log(err) }
            else {
                console.log(loc_Obj)
                res.json(loc_Obj)
            }
        });
    }
    catch (e) {
        console.log(e);
    }
});


router.post('/addLocationData', function (req, res, next) {
    try {
        var reqs = req.body;
        var location = reqs.addlocation
        var loc = {
            locations: location,
            status: 1
        };
        console.log(loc);
        mongoose.model('NewLocation').create(loc, function (err, dataObj) {
            if (err) { console.log(err) }
            else {
                console.log(dataObj)
                res.json(dataObj)
            }
        });
    }
    catch (e) {
        console.log(e);
    }
});

router.get('/listLocationview/:loc_id', function (req, res, next) {
    console.log(req.session.user_id);
    var role_id = req.session.role_id;
    try {
        let id = req.params.loc_id;
        mongoose.model('NewLocation').findOne({ _id: id }, (err, locObj) => {
            if (err) {
                console.log(err);
            } else {
                res.json(locObj);
            }
        });
    } catch (e) {
        console.log(e);
    }
});

router.post('/updateLocationData', /*isAuthenticated,*/ function (req, res, next) {
    try {
        var reqs = req.body;
        console.log(reqs._id);
        mongoose.model('NewLocation').findOneAndUpdate({ _id: reqs._id }, {
            $set: {
                locations: reqs.locations
            }
        }, function (err, dataobj) {
            if (err) {
                console.log(err);
            } else {
                console.log(dataobj);
                res.json(dataobj);
            }
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/locationdelete/:id', (req, res) => {
    try {
      var dataId = req.params.id;
      console.log(dataId);
      mongoose.model('NewLocation').remove({ _id: dataId }, (err, dataObj) => {
        if (err) {
          console.log(err);
        } else {
          res.json(dataObj);
        }
      });
    }
    catch (e) {
      console.log();
    }
  });


// staff list
router.get('/staffList', function (req, res, next) {
    console.log(req.session.role_id);
    var role_id = req.session.role_id;
    try {
        mongoose.model('NewStaff').find({}, function (err, newstaff_obj) {
            if (err) {
                console.log(err);
            } else {
                if (newstaff_obj) {
                    res.json(newstaff_obj);
                }
            }
        });
    } catch (e) {
        console.log();
    }
});

// post staff data
router.post('/addStaffdata', function (req, res, next) {
    try {
        var reqs = req.body;
        var role_id = '';
        if (reqs.staff_type == 'engineer') {
            role_id = 4
        } else {
            role_id = 0
        }
        var newStaff = {
            role_id: role_id,
            staff_type: reqs.staff_type,
            firstName: reqs.firstName,
            middleName: reqs.middleName,
            lastName: reqs.lastName,
            NickName: reqs.NickName,
            doB: reqs.doB,
            file_attach1: reqs.file_attach1_hidden ? reqs.file_attach1_hidden : '',
            gender: reqs.gender,
            phoneNumber: reqs.phoneNumber,
            email: reqs.email,
            password: reqs.password,
            permaAdrr: reqs.permaAdrr,
            permaCity: reqs.permaCity,
            staffstateCurrent: reqs.staffstateCurrent,
            permaPostalCode: reqs.permaPostalCode,
            attachFile: reqs.attachFile_hidden ? reqs.attachFile_hidden : '',
            language: reqs.language,
            english_level_type: reqs.english_level_type,
            english_level_date: reqs.english_level_date,
            stffSignature: reqs.stffSignature,
            terms: reqs.terms,
            ticket_id: ticketid(4),
            status: 1,
            create_date: new Date()
        }
        mongoose.model('NewStaff').create(newStaff, function (err, NewStaffObj) {
            if (err) {
                console.log(err)
            } else {
                res.json(NewStaffObj)
            }
        });
    }
    catch (e) {
        console.log(e);
    }
});

/*Staff View*/
router.get('/staffview/:dataID', function (req, res, next) {
    console.log(req.params.dataID);
    var role_id = req.session.role_id;
    var dataID = req.params.dataID;
    mongoose.model('NewStaff').findOne({ _id: req.params.dataID }, function (err, dataObj) {
        if (err) {
            console.log(err);
        } else {
            res.json(dataObj)
        }
    });
});

/*staffEdit services*/
router.get('/StaffEdit/:staff_id', function (req, res, next) {
    console.log(req.params.staff_id);
    try {
        var user_id = req.params.staff_id;
        mongoose.model('NewStaff').findOne({ _id: user_id }, function (err, dataObj) {
            if (err) {
                console.log(err);
            } else {
                res.json(dataObj)
            }
        });
    } catch (e) {
        console.log(e);
    }
});

router.post('/staffupdate', function (req, res, next) {
    try {
        var reqs = req.body;
        var obj = {
            staff_type: reqs.staff_type,
            firstName: reqs.firstName,
            middleName: reqs.middleName,
            lastName: reqs.lastName,
            NickName: reqs.NickName,
            doB: reqs.doB,
            gender: reqs.gender,
            phoneNumber: reqs.phoneNumber,
            email: reqs.email,
            password: reqs.password,
            permaAdrr: reqs.permaAdrr,
            permaCity: reqs.permaCity,
            staffstateCurrent: reqs.staffstateCurrent,
            permaPostalCode: reqs.permaPostalCode,
            language: reqs.language,
            english_level_type: reqs.english_level_type,
            english_level_date: reqs.english_level_date,
            stffSignature: reqs.stffSignature,
            ticket_id: ticketid(4),
            terms: reqs.terms,
            modify_date: new Date()
        }
        if (reqs.file_attach1 == '') {
            obj.file_attach1 = reqs.file_attach1_hidden
        } else {
            obj.file_attach1 = reqs.file_attach1

        }
        if (reqs.attachFile == '') {
            obj.attachFile = reqs.attachFile_hidden
        } else {
            obj.attachFile = reqs.attachFile
        }

        mongoose.model('NewStaff').findOneAndUpdate({ _id: reqs._id }, {
            $set: obj
        }, function (err, updateObj) {
            if (err) {
                console.log(err)
            } else {
                res.json(updateObj)
            }
        });
    } catch (error) {
        console.log(error)
    }
})


/*staff delete*/
router.get('/staffdelete/:id', (req, res) => {
    try {
        var dataId = req.params.id;
        console.log(dataId);
        mongoose.model('NewStaff').remove({ _id: dataId }, (err, dataObj) => {
            if (err) {
                console.log(err);
            } else {
                res.json(dataObj)
            }
        });
    }
    catch (e) {
        console.log();
    }
});


router.get('/logout', function (req, res) {
    console.log(req.session);
    req.session.destroy();
    console.log(req.session);
    res.json(true)
});


module.exports = router;