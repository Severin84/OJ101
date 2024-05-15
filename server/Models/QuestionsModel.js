const mongoose=require('mongoose');

const QuestionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    pid:{
        type:Number,
        required:true,
    },
},{timestamps:true})

const QuestionsModel=mongoose.model('Questions',QuestionSchema);

module.exports={
    QuestionsModel,
}