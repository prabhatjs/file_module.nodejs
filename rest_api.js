const express=require('express');
const user=require('./MOCK_DATA.json');
const FileSystem=require('fs');
const app=express();

app.get('/api/user',(req,res)=>{
   return res.json(user);
})
app.get('/user',(req,res)=>{
    const htmlpage=`
    <ul>
       ${user.map((user)=>
            `<td>${user.first_name}</td>
            `).join("")}
    </ul>
    `;
    res.send(htmlpage);
})
    app.get('/user/:id',(req,res)=>{
            const userId=Number(req.params.id);
            const users=user.find((user)=>
                user.id===userId)
            return res.json(users);
    })
    app.post('api/users',(req,res)=>{
        const body=req.body;
        user.push({...body,id:user.length+1});
        FileSystem.writeFile('./MOCk_DATA.json',JSON.stringify(user),(err,data)=>{
            return res.json({status:"Success"});
        })
    })
    app.delete('/user/:id',(req,res)=>{
        const id=Number(req.params.id);
        const users=user.find((user)=>user.id===id);
        const index=user.indexOf(users);//find the index correct index of id
        const newData=user.splice(index,1);//remove one data from one place to 1
       console.log(newData)

        FileSystem.writeFile('./MOCK_DATA.json',JSON.stringify(user),(err,data)=>{
            return res.json({status:"Success",data:newData});
        })
    })

app.listen(8009,()=>{
    console.log("server running");
})