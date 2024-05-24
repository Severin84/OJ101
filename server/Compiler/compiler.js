const fs=require('fs');
const {exec}=require('child_process');
const path=require('path');
const { stdout, stderr } = require('process');

const saveFile=async(name,data)=>{
    try{
       console.log("saving code");
       await fs.writeFile(name,data,function(error){
          if(error){
             console.log("somthing went wrong while saving file")
             //return;
          }else{
             console.log("File saved");
            // return;
          }
       })
    }catch(error){
        console.log("somthing went wrong")
        //return;
    }
}



const cExecution=async (data,input)=>{
     try{
        const filename="test.c";
        await saveFile(filename,data).then(()=>{
             console.log("gg")
            const inputfilename="input.txt";
             console.log("ll");
            fs.writeFile(inputfilename,input,function(error){
                if(error){
                    console.log(error);
                    return;
                }
            })
            console.log("f")
            const inputPath=path.join(__dirname,"../input.txt")
            const filePath=path.join(__dirname,"../test.c");
            console.log('H');
            console.log("file path >> "+filePath);
            console.log("k");
            exec('gcc '+filePath,(error,stdout,stderr)=>{
                if(error){
                    console.log(`exec error:${error}`);
                    return;
                }
            })

            console.log("Compiled");

            exec('../input.txt',(error,stdout,stderr)=>{
                if(error){
                    console.log('error >'+error);
                    return;
                }
            })

            console.log('output',stdout)
            return 
        }).catch(()=>{
            console.log("error in saved file"+saveFile)
            return;    
        })
     }catch(error){
        console.log("somthing went wrong while execution")
        return;
     }
}

module.exports={
    cExecution,
}