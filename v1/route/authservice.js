var express = require('express');
var route = express.Router();



route.post('/sysytemLogin', (req, res) => {
    console.log('logging in');
    var Object = req.body;
    console.log('request is:', Object);
    //
    //
})

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