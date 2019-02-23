var serialport=require('serialport')
var bodyparser=require('body-parser');
const express=require('express');
const opener=require('opener');
/** add all modules and include the static files */
var app=express();
  app.use(express.static('./'));
var r="";
/** these arrays are used for testing. Not removed for future use */
//var a=[82,84,53,1,1,83,69,84,79,"O".charCodeAt(),79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,15,37,0,0,111,123,1,0,1,125,119,0,0,19,136,111,123,1,0,0,125,82,83,84]
 // var a=[82,84,53,1,1,83,69,84,79,"I".charCodeAt(),79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,15,37,0,0,111,123,1,0,1,124,82,83,84]
var a=[82, 84, 53, 1, 1, 83, 69, 84,"I".charCodeAt(), "P".charCodeAt(), 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 1, 0, 1, 61, 111, 123, 2, 0, 100, 125, 0, 69, 68, 82, 83, 84]

var urlencode=bodyparser.urlencoded({extended:false})
var code=new Array();
var toolbox;

/** Detecting the port to which the device is connected and then create myPort */
var comport;
var myPort;
serialport.list(function(err,ports)
{
  ports.forEach(function(port)
  {
    //vendor Id is specified here
    if(port.vendorId=="10C4")
    {
  //    console.log(port.comName);
      comport=port.comName;
      console.log(comport);
      myPort =new serialport(comport,9600)
    }
  });
});
/** the code in myPort.write(code,...) function is the one which writes to the device */

/** handling submit request */
app.post('/',urlencode,function(req,res)
{
  var response='';  
//  console.log(req.body.code);
  code=JSON.parse(req.body.code);
  /** msg is kept for further testing */
  var msg=["R".charCodeAt(),"T".charCodeAt(),"5".charCodeAt()]
  if(myPort)
  {
        myPort.write(code ,function(err)
      {
        console.log("writing")
        if(err)
        {
          console.log(err);
        }
        else
        {
          console.log("good");

        }
        
      }); 
  }  
  
    
});

opener("http://localhost:3000");
/**setting the port */
app.listen(3000,()=>console.log("3000"));


