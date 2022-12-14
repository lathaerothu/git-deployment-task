const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send ("Welcome..!!")
})
app.listen(8081,()=>{
    console.log("server running")
})