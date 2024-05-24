const express=require('express');
const {cCode}=require("../Controllers/Compiler.js")
const router=express.Router();

router.post('/compile',cCode)

module.exports=router