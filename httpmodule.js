const httpmodule=require('http')

//create own server using http module
const run=httpmodule.createServer((req,res)=>{
    console.log("New Request is received ");
    res.end("Hey I am server");
})

run.listen(8001,()=>{
    console.log("Server Runing! ");
})