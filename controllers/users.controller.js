const users=require("../user.json");

module.exports.getAllUsers=(req,res,next)=>{
    res.json(users); 
}

module.exports.getRandomUsers=(req,res,next)=>{
     res.send(users[Math.floor(Math.random()*users.length)]);
}    
    

module.exports.saveUsers=(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.send(users);
}