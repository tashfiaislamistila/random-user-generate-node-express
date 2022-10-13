const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect=require("./utils/dbConnect");
const port = process.env.PORT || 5000;
const usersRoutes=require("./routes/user.route.js");

app.use(cors());
app.use(express.json());
dbConnect();

app.use("/user",usersRoutes);

// run().catch(console.dir);

 app.get("/",(req,res)=>{
     res.send("Hello world");
 });

app.all("*",(req,res)=>{
    res.send("No route found.");
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});