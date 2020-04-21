const mongoose = require('../connection');
const Schema = mongoose.Schema;

var answer = new Schema({
    'questionId': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questionCollection'
    },
    'status': {
        type: String
    },
    'submittedBy': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userCollection'
    },
    'submissionDate': {
        type: Date
    },
    'answer': {},
    'score': {
        type: Number
    }
});

var answerCollection = mongoose.model('answerCollection', answer);
module.exports = answerCollection;