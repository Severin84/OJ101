import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [questions,setQuestions]=useState()
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
      <div>
        {
          questions && questions.map((value,idx)=>(
            <div key={idx}>
              <h4>{value?.title}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home