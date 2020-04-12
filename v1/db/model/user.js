const mongoose = require('../connection');
const Schema = mongoose.Schema;



var userRating = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supportCollection'
    },
    score: {
        type: String
    }
})

var user = new Schema({
    'name': {
        type: String
    },
    'password': {
        type: String
    },
    'role': {
        type: String
    },
    'rights': [],
    'ratings': [userRating],
    'chats': [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatCollection'
    }],
    'reconnectId': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supportCollection',
        default: null
    },
    'creationDate': {
        type: Date
    },
    'socketId': {
        type: String,
        default: null
    },
});

var userCollection = mongoose.model('userCollection', user);
module.exports = userCollection;