const users=require("../user.json");

module.exports.getAllUsers=(req,res,next)=>{
    res.send(users); 
}
// router.get("/random",(req,res)=>{
    // res.send(users[Math.floor(Math.random()*users.length)]);
    // });

module.exports.getRandomUsers=(req,res,next)=>{
     res.send(users[Math.floor(Math.random()*users.length)]);
}    
    

module.exports.saveUsers=(req,res)=>{
    res.send("save user")
}