var express = require('express');
var route = express.Router();
var testOperations = require("../db/helper/testHelpers");
var questionOperations = require("../db/helper/questionHelpers");

route.post('createTest', async (req, res) => {

});

route.post('/addQuestiontoTest', (req, res) => {

});

route.post('/deleteQuestionfromTest', (req, res) => {

});

route.post('/getTest', (req, res) => {

});

route.post('/getAttemptedTest', (req, res) => {

});

route.post('/getResultForTest', (req, res) => {

});

module.exports = route;

//create test
//add questions to test
//delete question from test
//delete test
//findTestById
//produce result for test