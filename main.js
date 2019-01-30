var serialport=require('serialport')
var bodyparser=require('body-parser');
const express=require('express');
  var app=express();
  app.use(express.static('./'));


  var urlencode=bodyparser.urlencoded({extended:false})
var code=new Array();
app.post('/',urlencode,function(req,res)
{
  console.log(req.body.code);
  code=JSON.parse(req.body.code);
});
console.log(code);

//var myPort=new serialport("COM3",9600);

app.listen(3000,()=>console.log("3000"));
