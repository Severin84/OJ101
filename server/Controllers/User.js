const jwt =require("jsonwebtoken");
const User=require('../Models/UserModel.js');
const bcrypt=require('bcrypt');

const register=async(req,res,next)=>{
    try{
      const {name,email,password}=await req.body;
      const existingUser=await User.UserModel.findOne({email});
      
      if(existingUser){
         return res.status(400).json({message:"Email already registered"});
      }
      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(password,salt);
      
      const newUser=new User.UserModel({name,email,password:hashedPassword});
      await newUser.save();
       res.status(200).json({message:"User has been created"})
    }catch(error){
        res.status(500).json({message:"An error occured while registering the User"})
    }
}

const login=async(req,res,next)=>{
    try{
      const {email,password}=req.body;
      const user=await User.UserModel.findOne({email});
      if(!user){
        return res.status(400).json({message:"Invalid Email or Password"})
      }
      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(password,salt)
      const isPasswordVaild=bcrypt.compare(user.password,hashedPassword);
      if(!isPasswordVaild){
        return res.status(400).json({message:"Invalid Email or Password"});
      }
     // console.log("hhele")
      const token=jwt.sign({userId:user._id},'secretKey');

      res.status(200).json({data:user})
    }catch(error){
        res.status(500).json({message:'An error occured while logging'})
    }
}

// const forgotPassword=async(req,res,next)=>{
//     try{
//         const {email}=req.body;
//         const user=await User.UserModel.findOne({email});
//         if(!user){
//             return res.status(404).json({message:"User not found"});
//         }

//         const resetToken=crypto.randomBytes(20).toString('hex');
//         user.t
//     }
// }
module.exports={
    register,login
}