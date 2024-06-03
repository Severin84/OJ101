import axios from 'axios';
import React, { useState } from 'react'

const QuestionsUpload = () => {
    const [title,setTitle]=useState();
    const [discription,setDiscription]=useState()
    const [testCase,setTestCase]=useState([]);
    const [correctAns,setCorrectAns]=useState([]);
    const [pid,setPid]=useState();

    const updateDis=(value)=>{
       setDiscription(value)
    }
    const updatetitle=(value)=>{
       setTitle(value)
    }
    const updatetestCase=(text)=>{
        setTestCase([text])
    }
    const updateCorrectAns=(value)=>{
        setCorrectAns(value)
    }
    const updatePID=(value)=>{
       setPid(value)
    }

    const uploadQuestion=async()=>{
        const response=await axios.post('http://localhost:5000/api/question/createQuestion',{
            title:title,
            discription:discription,
            pid:pid,
        })
        console.log(response)
    }

    const uploadTestCases=async()=>{
        const response=await axios.post('http://localhost:5000/api/tc/createTC',{
            TestCase:testCase,
            answers:correctAns,
            pid:pid,
        })
        console.log(response)
    }
   
  return (
    <div style={{display:"flex"}}>
    <div>
        <div style={{display:"flex",position:"relative",justifyContent:"center",alignItems:"center",marginLeft:"-10rem",marginBottom:"1rem"}}>
            <h2>Question Upload</h2>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"flex"}}>
            <div>
            <span style={{fontSize:"1.5rem"}}>Title : </span>
            </div>
            <div>
             <textarea style={{borderRadius:"0.5rem"}} name='paragraph_text' cols={80} row={10} onChange={(e)=>updatetitle(e.target.value)}></textarea>
            </div>
        </div>
        <div>
        <div style={{display:"flex",marginRight:"5rem"}}>
                <span style={{fontSize:"1.5rem"}}>PID:</span>
                <input style={{height:"2rem",borderRadius:"0.5rem"}} type="number"  onChange={(e)=>updatePID(e.target.value)}/>
         </div>
         </div>
        </div>
        <div style={{display:"flex"}}>
            <div>
                <span style={{fontSize:"1.5rem"}}>Discription:</span>
            </div>
            <div style={{height:"20rem"}}>
             <textarea style={{borderRadius:"0.5rem"}} name='paragraph_text' cols={70} rows={20} onChange={(e)=>updateDis(e.target.value)}></textarea>
            </div>
        </div>
        <div style={{display:"flex"}}>
        <div style={{display:"flex"}}>
            <div>
                <span style={{fontSize:"1.5rem"}}>Test Cases:</span>
            </div>
            <div>
             <textarea style={{borderRadius:"0.5rem"}} name='paragraph_text' cols={50} rows={10} onChange={(e)=>updatetestCase(e.target.value)}></textarea>
            </div>
        </div>
        <div style={{display:"flex",marginLeft:"2rem"}}>
            <div>
                <span style={{fontSize:"1.5rem"}}>Correct Answers:</span>
            </div>
            <div>
             <textarea style={{borderRadius:"0.5rem"}} name='paragraph_text' cols={50} rows={10} onChange={(e)=>updateCorrectAns(e.target.value)}></textarea>
            </div>
        </div>
        </div>
        <div>

        </div>
    </div>
    <div style={{width:"2rem",justifyContent:"space-between",display:"flex"}}>
    <div>
        <button style={{height:"3rem",width:"6rem",borderRadius:"0.5rem",backgroundColor:"#3f8efd"}} onClick={()=>uploadQuestion()}>Upload Question</button>
    </div>
    <div>
        <button style={{height:"3rem",width:"6rem",borderRadius:"0.5rem",backgroundColor:"#3f8efd"}} onClick={()=>uploadTestCases()}>Upload TestCases</button>
    </div>
    </div>
    </div>
  )
}

export default QuestionsUpload