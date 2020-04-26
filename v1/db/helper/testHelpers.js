const testCollection = require('../model/test');
const submissionCollection = require('../model/submissions');
const questionCollection = require('../model/question');
const tutorCollection = require('../model/tutor');

const testOperations = {

    createNewTest(Object, res) {
        console.log('creatingnewtest');
        Object.creationDate = Date.now();
        //if random questions TRUE, then fill question array with random 5 questions

        testCollection.create(Object, (err, doc) => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else if (doc) {
                tutorCollection.findByIdAndUpdate(Object.author, {
                    $push: {
                        tests: doc._id
                    }
                }, (err, doc) => {
                    if (err) {
                        console.log('Error During Add ', err);
                    } else if (doc) {
                        res.send('Test Record added...');
                    }
                })

            }
        })
    },

    addQuestionInTest(Object, res) {
        console.log("addQuestionsinTest");
        testCollection.findByIdAndUpdate(Object.testId, {
            $push: {
                question: Object.questionId
            }
        }, (err, doc) => {
            if (err) {
                console.log('Error During pushing question ', err);
            } else if (doc) {
                questionCollection.findByIdAndUpdate(Object.questionId, {
                    $push: {
                        tests: Object.testId
                    }
                }, (err, doc) => {
                    if (err) {
                        console.log('Error During pushing question ', err);
                    } else {
                        res.send('question added');
                    }
                });
            }
        })
    },

    async deleteQuestionInTest(Object, res) {
        console.log("deleteQuestionsinTest");
        var localArray = [];
        await testCollection.findById(Object.testId, (err, res) => {
            if (err) {
                console.log('Error During deleting question ', err);
            } else if (doc) {
                localArray = doc.questions;
                for (let i = 0; i < localArray.length; i++) {
                    if (localArray[i] == Object.questionId) {
                        localArray.splice(i, 1);
                    }
                }

            }
        });

        await testCollection.findByIdAndUpdate(Object.testId, {
            $set: {
                questions: localArray
            }
        }, (err, doc) => {
            if (err) {
                console.log('Error During deleting question ', err);
            } else {
                res.send('question added');
            }
        });
    },

    testDetails(Object, res) {
        console.log("fetching test details");
        testCollection.findById(Object.testId,
            (err, doc) => {
                if (err) {
                    console.log('Error During fetching test ', err);
                } else {
                    console.log('fetched test');
                    res.send(doc);
                }
            })
    },

    submitTest(Object, res) {
        console.log("submitting test");
        Object.submissionDate = Date.now();
        submissionCollection.create(Object,
            (err, doc) => {
                if (err) {
                    console.log('Error During submitting test ', err);
                } else {
                    console.log('submission for test done');
                    res.send(doc);
                }
            })
    },

    getSubmittedTest(Object, res) {
        console.log("fetching submitted test");
        submissionCollection.findOne({
                "testId": Object.testId,
                "submittedBy": Object.userId
            },
            (err, doc) => {
                if (err) {
                    console.log('Error During fetching submitted test ', err);
                } else {
                    console.log('fetched sumbitted test');
                    res.send(doc);
                }
            })
    },

    async getResultforTest(Object, res) {
        console.log('result for submission');

        //foreach
        //   // qid in submittedAns, get correctAnswer from the questionCollection
        //   // compare it with the submittedAns mapped with qid,
        //   // if same , the add {"qid":"correct"} in score, 
        //   // else add {"qid":"incorrect"}

    },

}


module.exports = testOperations;

//create a test in collection(authorId,desc,name,duration  +status, creationTime, randomQ, etc);
//add Question in a test(testId,questionId );
//delete Question in a test(testId,questionId);
//get testDetails(testId)
//submit test results(testId,userId,answerarray  +duration)
//get submitted TestResults(new collection for submitted test)


//? about answer schema to change it into the submitted test schema