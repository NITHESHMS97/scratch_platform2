var serialport=require('serialport')
var bodyparser=require('body-parser');
const express=require('express');
  var app=express();
  app.use(express.static('./'));

  var a=[82,84,53,1,1,83,69,84,79,"O".charCodeAt(),79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,15,37,0,0,111,123,1,0,1,125,82,83,84]


  var urlencode=bodyparser.urlencoded({extended:false})
var code=new Array();

var myPort =new serialport('COM3',9600)

function senddata(code)
{
  myPort.on('open',function()
  {
    var msg=["R".charCodeAt(),"T".charCodeAt(),"5".charCodeAt()]
    myPort.write(a,function(err)
    {
        if(err)
        {
          console.log(err)
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
  for(var i=0;i<code.length;i++)
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


