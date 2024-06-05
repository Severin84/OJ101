import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Editor.css';
import {Buffer} from "buffer"
const Editor = ({question}) => {
  const codeTemplates=[
    {lang:"Java",template:"import java.util.*;\n public class test {\n public static void main(String[] args) \n {\n\tSystem.out.println('Hello World') \n } \n}"},
    {lang:"C",template:"#include <stdio.h> \n int main() { \n\tprintf('Hello World'); \n\treturn 0;\n}"},
    {lang:"cpp",template:"#include <bits/stdc++.h> \nusing namespace std;\n\tint main() {\n\tcout << 'Hello World';\n\treturn 0;\n}"},
    {lang:"Py",template:"print('Hello World')"},
  ]
  
  const [codetemplate,setCodetemplate]=useState()
  const [Lang,setLang]=useState('C');
  const [code,setCode]=useState();
  const [testInput,setTestInput]=useState();
  const [output,setOutput]=useState(); 
  const [codeError,setCodeError]=useState();

  

  const selectedLang=(event)=>{
    setLang(event.target.value);
    console.log(Lang)
  }

  const updateCode=(value)=>{
     setCode(value);
     console.log(code)
  }

  const updateInput=(value)=>{
     setTestInput(value)
     console.log(testInput)
  }  

  const executeCode=async()=>{
    try{
      const response =await axios.post('http://localhost:5000/api/code/compile',{
        lang:Lang,
        code:code,
        input:testInput
      })
      let b=Buffer.from(response.data.message.data);
      console.log(b.toString());
     setOutput(b.toString())
    }catch(error){
      console.log(error)
      setCodeError(error?.response?.data?.message)
     }
    
  }
   const runtheCode=()=>{
      executeCode();
   }

   const submitCode=async()=>{
       try{
          const response=await axios.post('http://localhost:5000/api/submit/submitCode',{
            lang:Lang,
            code:code,
            pid:question?.pid
          })
          console.log(response)
       }catch(error){
           
       }
   }

   useEffect(()=>{
       codeTemplates.map((value,idx)=>{
          if(value.lang===Lang){
            setCodetemplate(value.template)
          }
       })
   },[Lang])
   
  return (
    <>
    <div>
    <div className='EditorQuestionTag' >
         <h2>Question: {question?.title}</h2>
    </div>
      <div className='Editor' >
        <div>
          <select className='LanguageSelection' name="language" value={Lang}  onChange={selectedLang}>
            <option value="Java">Java</option>
            <option value="C">C</option>
            <option value="cpp">cpp</option>
            <option value="Py">Python</option>
          </select>
        </div>
       
        <div>
          <div>
            <textarea defaultValue={codetemplate}  cols={50} rows={30} onChange={(e)=>updateCode(e.target.value)}></textarea>
          </div>
          <div>
           <input type="file"/>
          </div>
        </div>

        <div className='EditorInputOutputButtons' >
           <div className='EditorInputOutput' >
           <textarea  name='paragraph_text' cols={50} rows={10} onChange={(e)=>updateInput(e.target.value)}></textarea>
           <div className='EditorOutput' >{output||codeError}</div>
           </div>
           <div className='EditorButtons'>
            <button className='EditorRun'  onClick={()=>runtheCode()}>Run</button>
            <button className='EditorSubmit' onClick={()=>submitCode()}>Submit</button>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Editor