const express=require('express');
const { createTC, getTC, updateTC, deleteTC } = require('../Controllers/TestCase');
const router=express.Router();

router.post("/createTC",createTC);
router.get("/getTC",getTC);
router.patch("/updateTC",updateTC);
router.delete("/deleteTC",deleteTC)

module.exports=router