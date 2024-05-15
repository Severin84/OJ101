import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();
  const [name,setName]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  const register=async()=>{
    try{
      const response=await axios.post("http://localhost:5000/api/auth/register",{
        name:name,
        email:email,
        password:password,
      })
     if(response.status===200){
       navigate('/home')
     }
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div style={{backgroundColor:"black",width:'100vw',height:"100vh"}}>
    <div style={{position:"relative",justifyContent:"center",alignContent:"center",display:"flex",top:"10rem",backgroundColor:"#a2f30c",width:"25%",left:"35rem",borderRadius:"1rem"}}>
    <div style={{wdith:"5rem",height:"15rem",position:"relative",display:"flex",flexDirection:"column",gap:"1rem",marginTop:'2rem'}}>
        <input type="text" placeholder='name' style={{width:"15rem",height:"2rem",borderRadius:"1rem"}} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='email' style={{width:"15rem",height:"2rem",borderRadius:"1rem"}} onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder='password' style={{width:"15rem",height:"2rem",borderRadius:"1rem"}} onChange={(e)=>setpassword(e.target.value)}/>
        <div style={{height:"2rem",width:"3rem",display:"flex",position:"relative",marginLeft:"6rem"}}>
        <button style={{height:"2rem",width:"4rem",borderRadius:"1rem",backgroundColor:"#000000",color:"white"}} onClick={()=>register()}>Submit</button>
        </div>
        <div style={{display:"flex",marginLeft:"4rem"}}>
          <span>Registered?</span>
          <Link to={'/login'} style={{textDecoration:"none"}}>
          <span >Login</span>
          </Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Register