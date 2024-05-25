const fs=require('fs');
const {exec,spawn}=require('child_process');
const path=require('path');
const { stdout, stderr } = require('process');
const util = require("util")
const pe=require('pe-parser')
const writeFileAsync = util.promisify(fs.writeFile);



const saveFile=async (name,data)=>{
    try{
    await writeFileAsync(name,data); 
    console.log("file has been saved!"); 
    }catch(error){
        console.log("somthing went wrong")
        return;
    }
}



const cExecution=async (data,input)=>{
     try{
        return new Promise(async (resolve, reject) => {
        const filename="test.cpp";
        await saveFile(filename,data)
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
            const filePath=path.join(__dirname,"../test.cpp");
            console.log('H');
            console.log("file path >> "+filePath);
            console.log("k");
            exec('g++ test.cpp',(error,stdout,stderr)=>{
                if(error){
                    console.log(`exec error:${error}`);
                    return;
                }

                if(stderr){
                    console.log(`stderr: ${stderr}`)
                    return ;
                }
                console.log("Compiled");

                const child=spawn("./a");
                child.stdin.write("2 2");
                child.stdin.end();
            

                child.stdout.on("data",(data)=>{
                  resolve(data); 
                     console.log(`child stdout:\n ${data}`);
                })

                
            })
        } )
     }catch(error){
        console.log("somthing went wrong while execution")
        return;
     }
}

module.exports={
    cExecution,
}