const mongoose=require('../connection');
const Schema=mongoose.Schema;

var admin=new Schema({
'name':{type:String},
'password':{type:String},
'role':'admin',
'rights':[],

});

var adminCollection=mongoose.model('adminCollection',admin);
module.exports=adminCollection;