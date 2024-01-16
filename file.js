 const file=require('fs');
 file.writeFileSync('./test.txt',"Hey I am created");
 const data=file.readFileSync('./test.txt','utf-8');//utf-8 is required if you are not give that you are not get correct value
 file.appendFileSync('./test.txt',"my Contact is prabhat@gmail.com");
// file.unlinkSync('./test.txt');
console.log(data);
console.log(file.statSync('./test.txt'));//status about file size when its create 
file.mkdirSync('./newNodeFolder/one/hello.txt');//create new folder and file

 setTimeout(()=>{
    console.log(data);
 },3000)