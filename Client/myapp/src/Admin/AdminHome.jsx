import React, { useState } from 'react'
import QuestionsUpload from './Components/QuestionsUpload'
import AllQuestions from './Components/AllQuestions'
import AllUsers from './Components/AllUsers'

const AdminHome = () => {
    const [component,setComponent]=useState(<QuestionsUpload/>);
  return (
    <div>
        <div style={{display:"flex"}}>
            <aside style={{width:"15rem", height:'100vh',backgroundColor:"#c1c1c1"}}>
                <div style={{marginTop:"15rem"}}>
                <div style={{marginBottom:"0.5rem",fontSize:"1.5rem",height:"2rem",width:"13rem",borderRadius:"0.5rem",backgroundColor:"#999696",cursor:"pointer"}} onClick={()=>setComponent(<QuestionsUpload/>)}>QuestionsUpload</div>
                <div style={{marginBottom:"0.5rem",fontSize:"1.5rem",height:"2rem",width:"13rem",borderRadius:"0.5rem",backgroundColor:"#999696",cursor:"pointer"}} onClick={()=>setComponent(<AllQuestions/>)}>AllQuestions</div>
                <div style={{marginBottom:"0.5rem",fontSize:"1.5rem",height:"2rem",width:"13rem",borderRadius:"0.5rem",backgroundColor:"#999696",cursor:"pointer"}} onClick={()=>setComponent(<AllUsers/>)}>AllUsers</div>
                </div>
            </aside>
            <div>
            <div style={{height:"10rem",width:"100vw",backgroundColor:"#0f0b30",color:"white"}}>
               <span style={{fontSize:"5rem",marginTop:"2rem"}}>DASHBOARD</span>  
            </div>
                <div style={{marginLeft:"2rem",marginTop:"2rem"}}>
                  {
                    component
                  }
                </div> 
            </div>
        </div>
    </div>
  )
}

export default AdminHome