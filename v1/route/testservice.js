var express = require('express');
var route = express.Router();
var testOperations = require("../db/helper/testHelpers");
var questionOperations = require("../db/helper/questionHelpers");

route.post('/createTest', (req, res) => {
    console.log("creating new test");
    console.log("request object", req.body);
    testOperations.createNewTest(req.body, res);
});

route.post('/addQuestiontoTest', (req, res) => {
    console.log("adding new Question to test");
    console.log("request object", req.body);
    testOperations.addQuestionInTest(req.body, res);
});

route.post('/deleteQuestionfromTest', (req, res) => {
    console.log("delete questions from test");
    console.log("request object", req.body);
    testOperations.deleteQuestionInTest(req.body, res);
});

route.post('/getTestDetails', (req, res) => {
    console.log("details test");
    console.log("request object", req.body);
    testOperations.testDetails(req.body, res);
});


route.post('/submitTest', (req, res) => {
    console.log("submit test");
    console.log("request object", req.body);
    testOperations.submitTest(req.body, res);
});

route.post('/getSubmittedtedTest', (req, res) => {
    console.log("get submitted test");
    console.log("request object", req.body);
    testOperations.getSubmittedTest(req.body, res);
});

route.post('/getResultForTest', (req, res) => {
    console.log("get test results");
    console.log("request object", req.body);
    testOperations.getResultforTest(req.body, res);
});

module.exports = route;

//create test
//add questions to test
//delete question from test
//delete test
//findTestById
//produce result for test