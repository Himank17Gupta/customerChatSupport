var express=require('express');
var route=express.Router();

route.post('/addadmin',(req,res)=>{
console.log('adding admin');
var adminObject=req.body;
console.log('request is:',adminObject);
// var adminOperations=require('../db/helpers/adminOperations');
// adminOperations.add(adminObject,res);
})


route.post('/userRegister',(req,res)=>{
    console.log('Registering User');
    var adminObject=req.body;
    console.log('request is:',adminObject);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(adminObject,res);
    })
 
route.post('/supportRegister',(req,res)=>{
    console.log('adding support');
    var adminObject=req.body;
    console.log('request is:',adminObject);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(adminObject,res);
    })

route.post('/removeUser',(req,res)=>{
    console.log('adding admin');
    var adminObject=req.body;
    console.log('request is:',adminObject);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(adminObject,res);
    })

route.post('/removeSupport',(req,res)=>{
    console.log('adding support');
    var adminObject=req.body;
    console.log('request is:',adminObject);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(adminObject,res);
    })

route.post('/viewChat',(req,res)=>{
    console.log('adding support');
    var adminObject=req.body;
    console.log('request is:',adminObject);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(adminObject,res);
    })

route.post('/viewProfileDetails',(req,res)=>{
  console.log('adding support');
  var adminObject=req.body;
  console.log('request is:',adminObject);
  // var adminOperations=require('../db/helpers/adminOperations');
  // adminOperations.add(adminObject,res);
    })


module.export=route;
