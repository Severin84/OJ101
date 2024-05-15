const express=require('express');
const { createQuestions, getQuestion, updateQuestion, deleteQuestion, getQuestions } = require('../Controllers/Question');
const router=express.Router();

router.post ("/createQuestion",createQuestions);
router.get("/getQuestion",getQuestion);
router.get("/getallquestions",getQuestions)
router.patch("/updateQuestion",updateQuestion);
router.delete("/deleteQuestion",deleteQuestion)

module.exports=router