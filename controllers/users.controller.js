const users=require("../user.json");

module.exports.getAllUsers=(req,res,next)=>{
    res.json(users); 
},

module.exports.getRandomUsers=(req,res,next)=>{
     res.send(users[Math.floor(Math.random()*users.length)]);
};
    

module.exports.saveUsers=(req,res,next)=>{
    console.log(req.body);
    users.push(req.body);
    res.send(users);
};

module.exports.updateUsers=(req,res,next)=>{
    const {id}=req.params;
    const filter={_id:id};

    const newUser=users.find(user=>user.id === Number(id));
    newUser.id=id;
    newUser.name=req.body.name;
    res.send(newUser);
};

module.exports.deleteUsers=(req,res,next)=>{
    const {id}=req.params;
    const filter={_id:id};
    res.send(users.filter(user=>user.id!==Number(id)));

}