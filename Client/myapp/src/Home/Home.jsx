import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({setQuestion}) => {
  const [questions,setQuestions]=useState();
  const navigate=useNavigate();
  const getQuestions=async()=>{
    const response=await axios.get("http://localhost:5000/api/question/getallQuestions")
    //console.log(response);
    setQuestions(response?.data?.data)
  }
 // console.log(questions)
  useEffect(()=>{
      getQuestions();
  },[])
  return (
    <div>
       <div style={{display:"flex",position:"relative",justifyContent:"center"}}>
            <h2>Questions</h2>
       </div>
      <div style={{marginLeft:"29rem",marginTop:"3rem",width:"40%",height:"100vh",borderRadius:"1rem",borderStyle:"solid"}}>
        {
          questions && questions.map((value,idx)=>(
            <div style={{display:'flex',position:"relative",justifyContent:"center"}} key={idx}>
              <h4 style={{cursor:"pointer"}} onClick={()=>{setQuestion(value?.title);navigate("/editor")}}>{value?.title}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home