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



const cplusExecution=async (data,input,filename)=>{
     try{
        return new Promise(async (resolve, reject) => {
        const fileName=filename || 'test.cpp';
        await saveFile(fileName,data)
            const inputfilename="input.txt";
            fs.writeFile(inputfilename,input,function(error){
                if(error){
                    console.log(error);
                    return;
                }
            })
            const inputPath=path.join(__dirname,"../input.txt")
            const filePath=path.join(__dirname,`..${fileName}`);
            //console.log("file path >> "+filePath);
            exec(`g++ ${fileName}`,(error,stdout,stderr)=>{
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
                const exepath=path.join(__dirname,"../a.exe");
                //console.log(exepath)
                child.stdin.write(input);
                
                child.stdin.end();

                child.stdout.on("data",(data)=>{
                  resolve(data); 
                     console.log(`child stdout:\n ${data}`);
                })
                
                fs.unlinkSync(inputPath);
                fs.unlinkSync(filePath)
                // fs.unlink(exepath,(error)=>{
                //     if(error){
                //         console.log(`Deleting exefile error:${error}`)
                //     }
                //     console.log("exe file deleted ")
                // })
            })
        } )
     }catch(error){
        console.log("somthing went wrong while execution")
        return;
     }
}


const cExecutions =(data,input,filename)=>{
    try{
        return new Promise(async (resolve, reject) => {
            const fileName=filename || 'test.c';
            await saveFile(fileName,data)
                const inputfilename="input.txt";
                fs.writeFile(inputfilename,input,function(error){
                    if(error){
                        console.log(error);
                        return;
                    }
                })
                const inputPath=path.join(__dirname,"../input.txt")
                const filePath=path.join(__dirname,`..${fileName}`);
                //console.log("file path >> "+filePath);
                exec(`gcc ${fileName}`,(error,stdout,stderr)=>{
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
                    const exepath=path.join(__dirname,"../a.exe");
                    //console.log(exepath)
                    child.stdin.write(input);
                    child.stdin.end();
    
                    child.stdout.on("data",(data)=>{
                      resolve(data); 
                         console.log(`child stdout:\n ${data}`);
                    })
                    
                    fs.unlinkSync(inputPath);
                    fs.unlinkSync(filePath)
                    // fs.unlink(exepath,(error)=>{
                    //     if(error){
                    //         console.log(`Deleting exefile error:${error}`)
                    //     }
                    //     console.log("exe file deleted ")
                    // })
                })
            } )
    }catch(error){
        console.log("somthing went wrong while execution")
        return;
    }
}


const javaExecutions=(data,input,filename)=>{
    try{
        return new Promise(async (resolve, reject) => {
           // console.log(data);
            const fileName=filename || 'test.java';
            await saveFile(fileName,data)
                const inputfilename="input.txt";
                fs.writeFile(inputfilename,input,function(error){
                    if(error){
                        console.log(error);
                        return;
                    }
                })
                const inputPath=path.join(__dirname,"../input.txt")
                const filePath=path.join(__dirname,`../${fileName}`);
                //console.log("file path >> "+filePath);
                exec(`javac ${fileName}`,(error,stdout,stderr)=>{
                    if(error){
                        console.log(`exec error:${error}`);
                        return;
                    }
    
                    if(stderr){
                        console.log(`stderr: ${stderr}`)
                        return ;
                    }
                    //console.log("Compiled");
    
                    const child=spawn("./a");
                    const exepath=path.join(__dirname,"../a.exe");
                    //console.log(exepath)
                    child.stdin.write(input);
                    //console.log("yy")
                    //child.stdin.write();
                    child.stdin.end();
    
                    child.stdout.on("data",(data)=>{
                      resolve(data); 
                         console.log(`child stdout:\n ${data}`);
                    })
                    
                    fs.unlinkSync(inputPath);
                    fs.unlinkSync(filePath)
                    // fs.unlink(exepath,(error)=>{
                    //     if(error){
                    //         console.log(`Deleting exefile error:${error}`)
                    //     }
                    //     console.log("exe file deleted ")
                    // })
                })
            } )
    }catch(error){
        console.log("somthing went wrong while execution")
        return;
    }
}
module.exports={
    cplusExecution,cExecutions,javaExecutions
}