const {cplusExecution,cExecutions,javaExecutions}=require('../Compiler/compiler.js')

const fs=require('fs')
const path=require('path')
const cCode=async(req,res,next)=>{
    try{
        const {lang,code,input}=req.body;
      
        if(lang==='C++'){
            console.log(code)
             const responce=await cplusExecution(code,input);
             if(responce){
                res.status(200).json({message:responce})
             }else{
                res.status(400).json({message:"somthing went wrong in code black box"})
             }
        }
        else if(lang==='C'){
             console.log(code)
             const responce=await cExecutions(code,input);
             if(responce){
                res.status(200).json({message:responce})
             }else{
                res.status(400).json({message:"somthing went wrong in code black box"})
             }
        }else if(lang==='Java'){
              console.log(code)
             const responce=await javaExecutions(code,input);
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

const codefromFile=async(req,res,next)=>{
     try{
         const {lang,input}=req.body;
         //console.log(lang)
         const filename=req.file.filename.split("-")[1];
         const codeFile=path.join(__dirname,'uploads',req.file.filename)
        // console.log(codeFile)

         const filecontent=await fs.readFile(codeFile,{encoding:'utf8'},function(error,code){
            //console.log(data)
            if(!error){
               //console.log(data);
                  if(lang==='C++'){
                  //console.log(code)
                  const responce=cplusExecution(code,input,filename);
                  if(responce){
                     res.status(200).json({message:responce})
                  }else{
                     res.status(400).json({message:"somthing went wrong in code black box"})
                  }
            }else if(lang==='C'){
                  //console.log(code)
                  const responce=cExecutions(code,input,filename);
                  if(responce){
                     res.status(200).json({message:responce})
                  }else{
                     res.status(400).json({message:"somthing went wrong in code black box"})
                  }
            }else if(lang==='Java'){
                  //console.log(code)
                  const responce=javaExecutions(code,input,filename);
                  if(responce){
                     res.status(200).json({message:responce})
                  }else{
                     res.status(400).json({message:"somthing went wrong in code black box"})
                  }
            }

            fs.unlinkSync(codeFile);
         }else{
               console.log(error)
            }
            
         }
      )
      
     }catch(error){
      res.status(400).json({message:"somthing went wrong while complie code from file"})
     }
}

module.exports={
    cCode,codefromFile
}