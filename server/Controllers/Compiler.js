const {cplusExecution,cExecutions,javaExecutions, pythonExecution}=require('../Compiler/compiler.js')
const {generateFile}=require('../Compiler/FileGenerator.js')
const {generateInputFile}=require('../Compiler/generateInputFile.js')
const fs=require('fs')
const path=require('path')
const cCode=async(req,res,next)=>{
    try{
        const {lang,code,input}=req.body;
        console.log("lang->"+lang)
        console.log('code->'+code)
        console.log('input->'+input)
        if(lang==='cpp'){
            try{
               const response=await cplusExecution(code,input);
               console.log(response)
               res.status(200).json({message:response})
            }catch(error){
               res.status(400).json({message:error})
            }
        }
        else if(lang==='C'){
             console.log(code)
             try{
               const response=await cExecutions(code,input);
               console.log(response)
               res.status(200).json({message:response})
             }catch(error){
               console.log("error C "+ error)
               res.status(400).json({message:error})
             }
        }else if(lang==='Java'){
             try{
               const response=await javaExecutions(code,input);
               console.log(response)
               res.status(200).json({message:response})
             }catch(error){
               res.status(400).json({message:error})
             }
        }else{
            try{
               const response=await pythonExecution(code,input);
               console.log(response)
               res.status(200).json({message:response})
            }catch(error){
               res.status(400).json({message:error})
            }
        }

    }catch(error){
        res.status(400).json({message:"somthing went wrong while complie c code"})
    }
}

const codefromFile=async(req,res,next)=>{
     try{
         const {lang,input}=req.body;
         
         const filename=req.file.filename.split("-")[1];
         const codeFile=path.join(__dirname,'uploads',req.file.filename)
       
         const filecontent=await fs.readFile(codeFile,{encoding:'utf8'},function(error,code){
            if(!error){
                  if(lang==='C++'){
                  console.log(code)
                  try{
                     const responce=cplusExecution(code,input,filename);
                     res.status(200).json({message:responce.toString()})
                  }catch(error){
                     res.status(400).json({message:error})
                  }
            }else if(lang==='C'){
                  console.log(code)
                  try{
                     const response=cExecutions(code,input,filename);
                     res.status(200).json({message:response.toString()})
                  }catch(error){
                     res.status(400).json({message:error})
                  }
            }else if(lang==='Java'){
                  try{
                     const response=javaExecutions(code,input,filename);
                     res.status(200).json({message:response.toString()})
                   }catch(error){
                     res.status(400).json({message:error})
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