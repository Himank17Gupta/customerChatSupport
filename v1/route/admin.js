var express = require('express');
var route = express.Router();

route.post('/addadmin', (req, res) => {
    console.log('adding admin');
    var Object = req.body;
    console.log('request is:', Object);
    var adminOperations = require("../db/helper/adminHelpers");
    adminOperations.addAdmin(Object, res);
})


route.post('/userRegister', (req, res) => {
    console.log('Registering User');
    var Object = req.body;
    console.log('request is:', Object);
    var adminOperations = require('../db/helper/adminHelpers');
    adminOperations.addUser(Object, res);
})

route.post('/supportRegister', (req, res) => {
    console.log('adding support');
    var Object = req.body;
    console.log('request is:', Object);
    var adminOperations = require('../db/helper/adminHelpers');
    adminOperations.addSupport(Object, res);
})

route.post('/profileInformation', (req, res) => {
    console.log('fetching profile information');
    var Object = req.body;
    var adminOperations = require('../db/helper/adminHelpers');
    adminOperations.getProfileDetails(Object, res);
})

route.post('/removeUser', (req, res) => {
    console.log('adding admin');
    var Object = req.body;
    console.log('request is:', Object);
    var adminOperations = require('../db/helper/adminHelpers');
    adminOperations.deleteUser(Object, res);
})

route.post('/removeSupport', (req, res) => {
    console.log('adding support');
    var Object = req.body;
    console.log('request is:', Object);
    var adminOperations = require('../db/helper/adminHelpers');
    adminOperations.deleteSupport(Object, res);
})

route.post('/viewChat', (req, res) => {
    console.log('adding support');
    var Object = req.body;
    console.log('request is:', Object);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(Object,res);
})

route.post('/viewProfileDetails', (req, res) => {
    console.log('adding support');
    var Object = req.body;
    console.log('request is:', Object);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(Object,res);
})

route.post('/updateRights', (req, res) => {
    console.log('changing role rights for selected profile');
    var Object = req.body;
    var adminOperations = require('../db/helper/adminHelpers');
    adminOperations.updateRoleandRights(Object, res);
})


module.exports = route;