
var devices=new Array();
devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["DC motor","DC motor"],["Geared motor","Geared motor"],["servo motor","servo motor"],["7 segment","7 segment"],["Tact swtich","Tact swtich"],["Touch switch","Touch switch"],["Dual switch","Dual switch"],["Heartbeat","Heartbeat"],["Metal sensor","Metal sensor"],["Light sensor","Light sensor"],['Distance sensor','Distance sensor'],["Sound sensor","Sound sensor"],["Gas sensor","Gas sensor"],["Temperature senor","Temperature sensor"],["Humidity sensor","Humidity sensor"]]

//var a3devices=devices.splice(6,1);
//a3devices=a3devices.splice(3,2);
function createPort(portname,devices)
{
  Blockly.Blocks[portname] = {
    init: function() {
      this.jsonInit({
        "message0": portname+'%1 %2',
        "args0": [
          {
            "type":"field_dropdown",
            "name":"CONNECT",
            "options":devices//[["LED","LED"],["beeper","beeper"],["laser","laser"],["motor","motor"]]
          },
          {
            "type": "input_value",
            "name": "VALUE",
            

          }
        ],
        "nextStatement": "Action",
        "previousStatement":"Action",
        "colour": 160,
        "tooltip": "port A3.",
      });
    }
  };
}

a1devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["Tact swtich","Tact swtich"],["Touch switch","Touch switch"],["Dual switch","Dual switch"],["Heartbeat","Heartbeat"],["Metal sensor","Metal sensor"],["Light sensor","Light sensor"],['Distance sensor','Distance sensor'],["Sound sensor","Sound sensor"],["Gas sensor","Gas sensor"],["Temperature senor","Temperature sensor"],["Humidity sensor","Humidity sensor"]]
createPort("A1",a1devices);

a3devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["servo motor","servo motor"],["Tact swtich","Tact swtich"],["Touch switch","Touch switch"],["Dual switch","Dual switch"],["Heartbeat","Heartbeat"],["Metal sensor","Metal sensor"],["Light sensor","Light sensor"],['Distance sensor','Distance sensor'],["Sound sensor","Sound sensor"],["Gas sensor","Gas sensor"],["Temperature senor","Temperature sensor"],["Humidity sensor","Humidity sensor"]]
createPort("A3",a3devices);
//devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["DC motor","DC motor"],["geared motor","geared motor"],["servo motor","servo motor"],["7 segment","7 segment"],["touch switch","toch switch"],["dual switch","dual switch"],["heartbeat","heartbeat"],["metal sensor","metal sensor"],["light sensor","light sensor"],["temperature senor","temperature sensor"],["humidity sensor","humidity sensor"]]
createPort("A2",a3devices);
var a4devices=devices;
a4devices.splice(3,4);
createPort("A4",a4devices);

var b2devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["Tact swtich","Tact swtich"],["Touch switch","Touch switch"],["Dual switch","Dual switch"],["Heartbeat","Heartbeat"],["Metal sensor","Metal sensor"],["Light sensor","Light sensor"],['Distance sensor','Distance sensor'],["Sound sensor","Sound sensor"],["Gas sensor","Gas sensor"],["Temperature senor","Temperature sensor"],["Humidity sensor","Humidity sensor"]]
var b1devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["Tact swtich","Tact swtich"],["Touch switch","Touch switch"],["Dual switch","Dual switch"],["Heartbeat","Heartbeat"],["Metal sensor","Metal sensor"]];
createPort("B1",b1devices);

var b2devices=devices;  
createPort("B2",b2devices);

createPort("B3",b2devices);
createPort("B4",b2devices);

createPort("C1",b2devices);
createPort("C2",b2devices);
createPort("C3",b2devices);
createPort("C4",b2devices);

var f1devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["Tact swtich","Tact swtich"],["Touch switch","Touch switch"],["Dual switch","Dual switch"],["Heartbeat","Heartbeat"],["Metal sensor","Metal sensor"]]
createPort("F1",f1devices);
createPort("F2",f1devices);


createPort("G1",f1devices);
createPort("G2",f1devices);

var m1devices=[["DC motor","DC motor"],["Geared motor","Geared motor"]]
createPort("M1",m1devices);
createPort("M2",m1devices);
createPort("M3",m1devices);
createPort("M4",m1devices);



