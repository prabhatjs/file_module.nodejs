const express=require('express');
const mongoose=require('mongoose');

const app=express();

//mongodb connection 
mongoose.connect("mongodb://127.0.0.1:27017/testdb").then(()=>{
    console.log("Connection 1,2,3.. go")
}).catch((err)=>{
    console.log(err);
})

const port=8081;
app.listen(port,()=>{console.log(`App Running On ${port}`)
});
//create scema-- structure of collection
const employeeSchema = new mongoose.Schema({
    empno:{
        type:String
    }
});

//create model - for this scema
const Employe= mongoose.model('employee',employeeSchema);

app.post('/api/user',async(req,res)=>{
    // const body=req.body.empno;
    console.log(req.bady.empno);
    const data= await Employe.create({
        empno:body.empno,//body.empno,
        ename:body.ename,
        job:body.job,
        hiredate:body.hiredate,
        sal:body.sal,
        deptno:body.deptno
    });
    res.status(201).json({
        message:"Success",
        data:{
            data
        }
    })
})

