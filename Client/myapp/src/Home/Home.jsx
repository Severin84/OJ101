import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css'

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
       <div className='QuestionTitle' >
            <h2>Questions</h2>
       </div>
      <div className='QuestionBlock' >
        {
          questions && questions.map((value,idx)=>(
            <div className='QuestionsQuestionDiv'  key={idx}>
              <h4 className='QuestionsQuestion'  onClick={()=>{setQuestion(value?.title);navigate("/editor")}}>{value?.title}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home