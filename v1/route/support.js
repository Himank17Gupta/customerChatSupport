var express=require('express');
var route=express.Router();

 
route.post('/supportLogout',(req,res)=>{
    console.log('logging out support');
    var adminObject=req.body;
    console.log('request is:',adminObject);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(adminObject,res);
    })

route.post('/other',(req,res)=>{
   // console.log('logging out support');
    var adminObject=req.body;
    console.log('request is:',adminObject);
    // var adminOperations=require('../db/helpers/adminOperations');
    // adminOperations.add(adminObject,res);
    })
    


module.exports=route;