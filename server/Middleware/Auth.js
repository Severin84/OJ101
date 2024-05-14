const jwt =require('jsonwebtoken');
const { UserModel } = require('../Models/UserModel');

const authenticateUser=(req,res,next)=>{
    try{
      const token =req.headers.authorization.split(' ')[1];

      const decodedToken=jwt.verify(token,'secretKey');

      req.userId=decodedToken.userId;

      next();
    }catch(error){
        res.status(401).json({message:"Unauthorized"})
    }
}


const authorizeUser=(requiredRole)=>async(req,res,next)=>{
  try{
    const user=await UserModel.findById(req.userId);
    if(user.role!==requiredRole){
        return res.status(403).json({error:"Forbidden"});
    }

    next();
  }catch(error){
     res.status(500).json({message:"An error occurred while authorizing the user"})
  }
}


module.exports={
    authenticateUser,
    authorizeUser
}