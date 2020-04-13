var express = require('express');
var route = express.Router();
var userOperations = require("../db/helper/userHelpers");
var supportOperations = require("../db/helper/supportHelpers");
var adminOperations = require("../db/helper/adminHelpers");

route.post('/systemLogin', async (req, res) => {
        console.log('logging in');
        var Object = req.body;
        console.log('request is:', Object);
        var result, value = false,
            count = 0;
        result = userOperations.search(Object, res);
        result.then(data => {
            console.log('14', data);
            if (count == 2 && value == false) {
                res.send('Invalid username or password');
            } else if (value != true) {
                value = data;
                count++;
            }
        });
        result = supportOperations.search(Object, res);
        result.then(data => {
            console.log('21', data);
            if (count == 2 && value == false) {
                res.send('Invalid username or password');
            } else if (value != true) {
                value = data;
                count++;
            }
        });
        result = adminOperations.search(Object, res);
        result.then(data => {
            console.log('28', data);
            if (count == 2 && value == false) {
                res.send('Invalid username or password');
            } else if (value != true) {
                value = data;
                count++;
            }
        });

        console.log(value, count);
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