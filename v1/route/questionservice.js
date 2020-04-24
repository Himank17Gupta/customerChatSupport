var express = require('express');
var route = express.Router();
var testOperations = require("../db/helper/testHelpers");
var questionOperations = require("../db/helper/questionHelpers");


route.post('/createQuestion', (req, res) => {
    console.log("creating new question");
    console.log("request object", req.body);
    questionOperations.createNewQuestion(req.body, res);
});

route.post('/deleteQuestion', (req, res) => {
    console.log("deleting question");
    console.log("request object", req.body);
    questionOperations.deleteQuestion(req.body, res);
});

route.post('/questionDetail', (req, res) => {
    console.log("detail for question");
    console.log("request object", req.body);
    questionOperations.getQuestionDetails(req.body, res);
});

route.post('/listOfAllQuestions', (req, res) => {
    console.log("fetching list of all question");
    console.log("request object", req.body);
    questionOperations.getListofQuestions(req.body, res);
});



module.exports = route;

//create question
//delete question
//findQuestionbyId
//check question for result