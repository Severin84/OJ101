const express=require('express');
const { getQuestionData } = require('../Controllers/SubmitCode');
const router=express.Router();

router.post("/submitCode",getQuestionData)

module.exports=router