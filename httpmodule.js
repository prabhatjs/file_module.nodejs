const httpmodule=require('http');
const logfile=require('fs');
const url=require('url');//this module seprate out protocol, host, query 
//create own server using http module
//?query after question mark called as query parameters
const run=httpmodule.createServer((req,res)=>{
    console.log("New Request is received ");
    const log=`${req.url} New Log\n`;
    const murl=url.parse(req.url,true);
    /**
     * Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?mobilenum',
  query: 'mobilenum',
  pathname: '/contact',
  path: '/contact?mobilenum',
  href: '/contact?mobilenum'
}
     */
    console.log(murl);//it return multiple object above here u can see 
    logfile.appendFile('log.txt',log,(err,result)=>{
    switch(murl.pathname){
        case'/':
        res.end('Home Page');
        break;
        case'/about':
        res.end("Hey! Peoples");
        break;
        case'/contact':
        res.end('1996prabhat@gmail.com');
        break;
        default:
        res.end("404")

    }
  
    })
   // console.log(req.headers);//header are contains extra information ,like host which browser you use 
    // res.end("Hey I am server");
})

run.listen(8001,()=>{
    console.log("Server Runing! ");
})