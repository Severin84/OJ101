import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const userLogin=async()=>{
    try{
       const response=await axios.post("http://localhost:5000/api/auth/login",{
        email:email,
        password:password
       })
       console.log(response)
       if(response.status===200 ){
         if(response?.data?.data?.role==="admin"){
          navigate("/admin")
         }else{
          navigate("/home")
         }
         
       }
    }catch(error){
       console.log(error)
    }
  }
  return (
    <div style={{backgroundColor:"black",width:'100vw',height:"100vh"}}>
    <div style={{position:"relative",justifyContent:"center",alignContent:"center",display:"flex",top:"10rem",backgroundColor:"#a2f30c",width:"25%",left:"35rem",borderRadius:"1rem"}}>
        <div style={{wdith:"5rem",height:"15rem",position:"relative",display:"flex",flexDirection:"column",gap:"1rem",marginTop:'2rem'}}>
            <input type="email" placeholder='email' style={{width:"15rem",height:"2rem",borderRadius:"1rem"}} onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder='password' style={{width:"15rem",height:"2rem",borderRadius:"1rem"}} onChange={(e)=>setpassword(e.target.value)}/>
            <div style={{height:"2rem",width:"3rem",display:"flex",position:"relative",marginLeft:"6rem"}}>
            <button style={{height:"2rem",width:"4rem",borderRadius:"1rem",backgroundColor:"#000000",color:"white"}} onClick={()=>userLogin()}>Submit</button>
            </div>
            <div style={{display:"flex",marginLeft:"3rem"}}>
            <span>Not Registered?</span>
            <Link to={'/'} style={{textDecoration:"none"}}>
            <span>Register</span>
            </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login