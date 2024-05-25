const express =require('express');
const mongoose =require('mongoose')
const dotenv = require('dotenv')
const authRoutes=require("./Routes/UserAuth.js");
const QuestionRoutes=require("./Routes/Questions.js")
const TCRoutes=require("./Routes/TestCase.js");
const Compiler=require("./Routes/Compiler.js")
const bodyparser=require('body-parser')
const cors=require('cors');
const app=express();


app.use(express.json());
dotenv.config()
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
//qIU2swIDluB5CV42
const PORT= process.env.PORT;
async function connect(){
    try{
        await mongoose.connect(process.env.DBURI,{})
        console.log("CONNECTED")
    }catch(error){
        console.log(error)
    }
}
app.use("/api/auth",authRoutes)
app.use("/api/question",QuestionRoutes)
app.use("/api/tc",TCRoutes)
app.use("/api/code",Compiler)
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})
connect();