const mongoose = require('../connection');
const Schema = mongoose.Schema;



var rating = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userCollection'
    },
    score: {
        type: String
    }
})

var support = new Schema({
    'name': {
        type: String
    },
    'password': {
        type: String
    },
    'role': 'support',
    'rights': [],
    'ratings': [rating],
    'userQueue': [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userCollection'
    }],
    'chats': [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatCollection'
    }],
    'isActiveNow': {
        type: Boolean
    },
    'creationDate': {
        type: Date
    },
    'socketId': {
        type: String,
        default: null
    },
});

var supportCollection = mongoose.model('supportCollection', support);
module.exports = supportCollection;