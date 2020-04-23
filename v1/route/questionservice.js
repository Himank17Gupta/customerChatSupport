var express = require('express');
var route = express.Router();
var testOperations = require("../db/helper/testHelpers");
var questionOperations = require("../db/helper/questionHelpers");


route.post('/createQuestion', (req, res) => {

});

route.post('/deleteQuestion', (req, res) => {

});

route.post('/findQuestion', (req, res) => {

});

route.post('/checkQuestionforMarking', (req, res) => {

});



module.exports = route;

//create question
//delete question
//findQuestionbyId
//check question for result