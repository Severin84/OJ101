const {cExecution}=require('../Compiler/compiler.js')


const cCode=async(req,res,next)=>{
    console.log("jj")
    try{
        const {lang,code,input}=req.body;
       
        if(lang==='C'){
            console.log(code)
             const responce=await cExecution(code,input);
             if(responce){
                res.status(200).json({message:responce})
             }else{
                res.status(400).json({message:"somthing went wrong in code black box"})
             }
        }
    }catch(error){
        res.status(400).json({message:"somthing went wrong while complie c code"})
    }
}

module.exports={
    cCode,
}