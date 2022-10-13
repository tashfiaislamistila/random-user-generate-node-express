const express = require("express");

const router= express.Router();

router.get("/all",(req,res)=>{
res.send("users found");
});

router.post("/save",(req,res)=>{
res.send("user added");
 });

 module.exports=router;