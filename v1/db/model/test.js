const mongoose = require('../connection');
const Schema = mongoose.Schema;



var test = new Schema({
    'testName': {
        type: String
    },
    'testDescription': {
        type: String
    },
    'duration': {
        type: Number
    },
    'randomQuestions': {
        type: Boolean
    },
    'question': [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questionCollection'
    }],
    'repeat': {
        type: Boolean
    },
    'author': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tutorCollection'
    },
    'creationDate': {
        type: Date
    },
    'status': {
        type: String
    },
});

var testCollection = mongoose.model('testCollection', test);
module.exports = testCollection;