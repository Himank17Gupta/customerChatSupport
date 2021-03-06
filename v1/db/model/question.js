const mongoose = require('../connection');
const Schema = mongoose.Schema;

var question = new Schema({
    'questionName': {
        type: String
    },
    'description': {
        type: String
    },
    'status': {
        type: String
    },
    'author': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tutorCollection'
    },
    'creationDate': {
        type: Date
    },
    'maximumScore': {
        type: Number
    },
    'tests': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'testCollection'
    }
});

var questionCollection = mongoose.model('questionCollection', question);
module.exports = questionCollection;