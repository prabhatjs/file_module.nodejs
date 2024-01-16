const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    console.log(req.method);
    res.send("Home Page")
})
app.get('/about',(req,res)=>{

    res.send("About Page");
})
app.get('/contact',(req,res)=>{
    if(req.query.trips){
        const change=req.query.trips.split("-");
        console.log(change);
    }
    res.status(200).send(req.query.name+" you age is "+req.query.age+" "+req.query.trips+" ");
})

app.listen(8001,()=>{
    console.log("express server Start");
})