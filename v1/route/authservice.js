var express = require('express');
var route = express.Router();
var userOperations = require("../db/helper/userHelpers");
var supportOperations = require("../db/helper/supportHelpers");
var adminOperations = require("../db/helper/adminHelpers");

route.post('/systemLogin', (req, res) => {
        console.log('logging in');
        var Object = req.body;
        console.log('request is:', Object);
        var result = userOperations.search(Object, res);
        if (result) {
            res.send(result);
        }
        result = supportOperations.search(Object, res);
        if (result) {
            res.send(result);
        }
        result = adminOperations.search(Object, res);
        if (result) {
            res.send(result);
        }

        //res.send("Invalid Login credentials");

    }),

    route.post('/authLogin', (req, res) => {
        //  console.log('logging out support');
        var Object = req.body;
        console.log('request is:', Object);
        //
        //
    })





module.exports = route;







//login for all admin, support , customer
//return response with user details, role, rights, urls , other imp stuff