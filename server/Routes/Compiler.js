const express=require('express');
const {cCode,codefromFile}=require("../Controllers/Compiler.js");
const upload = require('../Middleware/FileUpload.js');
const router=express.Router();

router.post('/compile',cCode)
router.post('/upload',upload.single('file'),codefromFile);
module.exports=router