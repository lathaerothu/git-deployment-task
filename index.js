const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send ("Welcome..!!")
})
app.listen(9080,()=>{
    console.log("server running")
})