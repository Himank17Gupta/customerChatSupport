const mongoose = require('../connection');
const Schema = mongoose.Schema;



var tutor = new Schema({
    'tutorName': {
        type: String
    },
    "password": {
        type: String
    },
    'role': {
        type: String
    },
    'rights': [],
    'tests': [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'testCollection'
    }],
    'creationDate': {
        type: Date
    },
});

var tutorCollection = mongoose.model('tutorCollection', tutor);
module.exports = tutorCollection;