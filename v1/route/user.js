var express = require('express');
var route = express.Router();



route.post('/userLogout', (req, res) => {
  console.log('logging out user');
  var Object = req.body;
  console.log('request is:', Object);
  // var adminOperations=require('../db/helpers/adminOperations');
  // adminOperations.add(Object,res);
})

route.post('/other', (req, res) => {
  //  console.log('logging out support');
  var Object = req.body;
  console.log('request is:', Object);
  // var adminOperations=require('../db/helpers/adminOperations');
  // adminOperations.add(Object,res);
})




module.exports = route;