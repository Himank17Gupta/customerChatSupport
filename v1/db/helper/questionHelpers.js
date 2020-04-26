const testCollection = require('../model/test');
const answerCollection = require('../model/answers');
const questionCollection = require('../model/question');


const questionOperations = {

    createNewQuestion(Object, res) {
        console.log('creatingnewquestion');
        Object.creationDate = Date.now();
        var rightAnswer = Object.rightAnswer;
        delete Object["rightAnswer"];
        questionCollection.create(Object, (err, doc) => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else if (doc) {
                answerCollection.create({
                    'questionId': doc._id,
                    'rightAnswer': rightAnswer
                }, (err, doc) => {
                    if (err) {
                        res.send('Error During Add');
                        console.log('Error During Add ', err);
                    } else if (doc) {
                        res.send('Test,answer record added...');
                    }
                })
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