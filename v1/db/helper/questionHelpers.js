const testCollection = require('../model/test');
const answerCollection = require('../model/user');
const questionCollection = require('../model/question');


const questionOperations = {

    createNewQuestion(Object, res) {
        console.log('creatingnewquestion');
        Object.creationDate = Date.now();
        //if random questions TRUE, then fill question array with random 5 questions

        questionCollection.create(Object, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('Test Record added...');
            }
        })
    },

    deleteQuestion(Object, res) {
        console.log('deleting question');
        questionCollection.findByIdAndDelete(Object.id, (err, doc) => {
            if (err) {
                console.log("some error occured", err);
            } else if (doc) {
                res.send(doc);
            }
        });
    },

    getQuestionDetails(Object, res) {
        console.log("getting question details");
        questionCollection.findById(Object.id, (err, doc) => {
            if (err) {
                console.log(err);
            } else if (doc) {
                res.send(doc);
            }
        });
    },

    getListofQuestions(Object, res) {
        console.log("getting list of questions");
        questionCollection.find({}, {
            _id: 1
        }, (err, doc) => {
            if (err) {
                console.log("some error occured", err);
            } else if (doc) {
                res.send(doc);
            }
        });
    }


}
module.exports = questionOperations;

//create question(name,desc,author,answer,status,maximumScore,creationDate)
//delete question(questionId,validatorID)
//check for score(submissionId);


//? about answer schema to change it into the submitted test schema