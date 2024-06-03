import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Editor.css'
const Editor = ({question}) => {
  
  const [Lang,setLang]=useState('C');
  const [code,setCode]=useState();
  const [testInput,setTestInput]=useState();
  const [output,setOutput]=useState(); 

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
    const response =await axios.post('http://localhost:5000/api/code/compile',{
      lang:Lang,
      code:code,
      input:testInput
    })
    //console.log(response)
    setOutput(response?.data?.message)
  }
  
   const runtheCode=()=>{
      executeCode();
   }


  return (
    <>
    <div>
    <div className='EditorQuestionTag' >
         <h2>Question: {question}</h2>
    </div>
      <div className='Editor' >
        <div>
          <select className='LanguageSelection' name="language" value={Lang}  onChange={selectedLang}>
            <option value="Java">Java</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
          </select>
        </div>
        {/* <div >
          <div style={{width:'70vw',height:"98vh", backgroundColor:'gray'}}>
          EDITOR
          </div>
        </div> */}
        <div>
          <div>
            <textarea defaultValue={''}  cols={50} rows={30} onChange={(e)=>updateCode(e.target.value)}/>
          </div>
          <div>
           <input type="file"/>
          </div>
        </div>

        <div className='EditorInputOutputButtons' >
           <div className='EditorInputOutput' >
           <textarea  name='paragraph_text' cols={50} rows={10} onChange={(e)=>updateInput(e.target.value)}></textarea>
           <div className='EditorOutput' >{output}</div>
           </div>
           <div className='EditorButtons'>
            <button className='EditorRun'  onClick={()=>runtheCode()}>Run</button>
            <button className='EditorSubmit' >Submit</button>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Editor