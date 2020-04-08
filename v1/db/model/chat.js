const mongoose=require('../connection');
const Schema=mongoose.Schema;



var msgObject=new Schema({
    sender:{},
    time:{type:Date},
    text:{type:String}
})

var chat=new Schema({
'user_id':{},
'support_id':{},
'texts':[msgObject],
});

var chatCollection=mongoose.model('chatCollection',chat);
module.exports=chatCollection;