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
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(Object,res);
})

route.post('/supportRegister', (req, res) => {
    console.log('adding support');
    var Object = req.body;
    console.log('request is:', Object);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(Object,res);
})

route.post('/removeUser', (req, res) => {
    console.log('adding admin');
    var Object = req.body;
    console.log('request is:', Object);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(Object,res);
})

route.post('/removeSupport', (req, res) => {
    console.log('adding support');
    var Object = req.body;
    console.log('request is:', Object);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(Object,res);
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

route.post('/updateRoleRights', (req, res) => {
    console.log('changing role rights for selected profile');
    var Object = req.body;
    //helper function
})


module.exports = route;