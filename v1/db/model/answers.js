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
    'rightAnswer': {},
    'score': {
        type: Number
    }
});

var answerCollection = mongoose.model('answerCollection', answer);
module.exports = answerCollection;