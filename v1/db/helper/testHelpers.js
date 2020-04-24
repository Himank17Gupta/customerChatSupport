const testCollection = require('../model/test');
const answerCollection = require('../model/user');
const questionCollection = require('../model/question');


const testOperations = {

    createNewTest(Object, res) {
        console.log('creatingnewtest');
        Object.creationDate = Date.now();
        //if random questions TRUE, then fill question array with random 5 questions

        testCollection.create(Object, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('Test Record added...');
            }
        })
    },

    addQuestionInTest(Object, res) {
        console.log("addQuestionsinTest");
        testCollection.findByIdAndUpdate(Object.id, {
            $push: {
                questions: res.questionId
            }
        }, (err, doc) => {
            if (err) {
                console.log('Error During pushing question ', err);
            } else {
                res.send('question added');
            }
        })
    },

    deleteQuestionInTest() {

    },

    testDetails() {
        console.log("fetching test details");
        testCollection.findById(Object.id,
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
        Object.creationDate = Date.now();
        answerCollection.create(Object,
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
        answerCollection.findById(Object.id,
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
        var submission = await answerCollection.findById(Object.id, (err, doc) => {
            if (err) {
                console.log("error occured", err);
                return undefined;
            } else if (doc) {
                return doc;
            }
        });

        var testId = submission.testId;
        var submittedAnswers = submission.answers; //[{"qid":"ans"},...,]
        var score = [];
        //foreach
        //   // qid in submittedAns, get correctAnswer from the questionCollection
        //   // compare it with the submittedAns mapped with qid,
        //   // if same , the add {"qid":"correct"} in score, 
        //   // else add {"qid":"incorrect"}

        res.send(score);
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