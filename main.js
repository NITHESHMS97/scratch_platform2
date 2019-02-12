var serialport=require('serialport')
var bodyparser=require('body-parser');
const express=require('express');
  var app=express();
  app.use(express.static('./'));

//var a=[82,84,53,1,1,83,69,84,79,"O".charCodeAt(),79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,15,37,0,0,111,123,1,0,1,125,119,0,0,19,136,111,123,1,0,0,125,82,83,84]
 // var a=[82,84,53,1,1,83,69,84,79,"I".charCodeAt(),79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,15,37,0,0,111,123,1,0,1,124,82,83,84]
var a=[82, 84, 53, 1, 1, 83, 69, 84,"I".charCodeAt(), "P".charCodeAt(), 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 1, 0, 1, 61, 111, 123, 2, 0, 100, 125, 0, 69, 68, 82, 83, 84]

var urlencode=bodyparser.urlencoded({extended:false})
var code=new Array();

var comport;
var myPort;
serialport.list(function(err,ports)
{
  ports.forEach(function(port)
  {
    if(port.vendorId=="10C4")
    {
  //    console.log(port.comName);
      comport=port.comName;
      console.log(comport);
      myPort =new serialport(comport,9600)
    }
  });
});



function senddata(code)
{
  myPort.on('open',function()
  {
    var msg=["R".charCodeAt(),"T".charCodeAt(),"5".charCodeAt()]
    myPort.write(code,function(err)
    {
        if(err)
        {
        }
        else
        {
            console.log("message written");
        }
    });

  })
}
app.post('/',urlencode,function(req,res)
{
  console.log(req.body.code);
  code=JSON.parse(req.body.code);
  for(var i=0;i<a.length;i++)
  {
    console.log(i+" "+code[i]+" "+a[i])
  }
  myPort.write(code,function(err)
    {
      if(err)
      {
        console.log(err);
      }
      else
      {
        console.log("good");
      }
    });  
//  senddata(code);
});
console.log(code);
//senddata(code);


app.listen(3000,()=>console.log("3000"));


