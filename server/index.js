const express =require('express');
const mongoose =require('mongoose')
const authRoutes=require("./Routes/UserAuth.js");
const bodyparser=require('body-parser')
const app=express();
const PORT=5000;

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
//qIU2swIDluB5CV42
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://84severin:qIU2swIDluB5CV42@cluster0.8wd6kwl.mongodb.net/OJTRIAL101',{})
        console.log("CONNECTED")
    }catch(error){
        console.log(error)
    }
}
app.use("/api/auth",authRoutes)
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})
connect();