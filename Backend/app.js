const express=require("express");
const db=require("./config/db");
const app=express();
const port=8080;

db();

app.listen(port,()=>{
    console.log("Server is Listening....");
})


app.use((err,req,res,next)=>{
    console.log(err);
})