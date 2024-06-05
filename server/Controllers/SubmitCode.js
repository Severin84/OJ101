const QuestionModel=require("../Models/QuestionsModel.js")
const TestCaseModel=require("../Models/TestCaseModel.js");

const getQuestionData=async(req,res,next)=>{
   try{
      const {lang,code,pid}=req.body;
      if(!lang||!code||!pid){
        res.status(400).json({message:"Both language and code are required"});
      }
      const testData=await TestCaseModel.TestCaseModel.findOne({pid:pid});
      console.log(testData);
      console.log(typeof(testData));
      
   }catch(error){
    console.log(error)
   }
}

module.exports={
    getQuestionData
}