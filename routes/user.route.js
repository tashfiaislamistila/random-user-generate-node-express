const express = require("express");
const users=require("../user.json");

const router= express.Router();

router.get("/all",(req,res)=>{
res.send(users);
});

router.post("/save",(req,res)=>{
res.send("user added");
 });

 module.exports=router;