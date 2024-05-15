import React, { useEffect, useState } from 'react'
import axios from "axios"
const AllQuestions = () => {
    const [questions,setQuestions]=useState(["Title1","Title2","Title3"])
    useEffect(async()=>{
      const data=await axios.get("http://localhost:5000/api/question/getallQuestions");
      setQuestions(data?.data?.data)
    },[])
  return (
    <div>
        <div >
            {
              questions && questions.map((value,idx)=>(
                 <div key={idx} style={{display:"flex",gap:"1rem"}}>
                    <h2>{value?.pid}</h2>
                    <h2>{value?.title}</h2>
                    {/* <button style={{height:"2rem",width:"3rem",borderRadius:"0.5rem",backgroundColor:"#f92121"}}>Solve</button>
                    <button style={{height:"2rem",width:"5rem",borderRadius:"0.5rem",backgroundColor:"#17f129"}}>Mark As Done</button> */}
                 </div>
              ))
            }
        </div>
    </div>
  )
}

export default AllQuestions