const mongoose = require('../connection');
const Schema = mongoose.Schema;


var submission = new Schema({
    'testId': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'testCollection'
    },
    'submittedBy': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userCollection'
    },
    'status': {
        type: String
    },
    'submissionDate': {
        type: Date
    },
    'answer': [],
    'score': {
        type: Number
    }
});

var submissionCollection = mongoose.model('submissionCollection', submission);
module.exports = submissionCollection;