Blockly.Blocks['A1'] = {
  init: function() {
    this.jsonInit({
      "message0": 'A1 %1 %2',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"CONNECT",
          "options":[["LED","LED"],["beeper","beeper"],["laser","laser"],["motor","motor"]]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          

        }
      ],
      "nextStatement": "Action",
      "previousStatement":"Action",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
    });
  }
};

Blockly.Blocks['A2'] = {
  init: function() {
    this.jsonInit({
      "message0": 'A2 %1 %2',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"CONNECT",
          "options":[["LED","LED"],["beeper","beeper"],["laser","laser"],["motor","motor"]]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          

        }
      ],
      "nextStatement": "Action",
      "previousStatement":"Action",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",

    });
  }
};

var devices=new Array();
devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["DC motor","DC motor"],["geared motor","geared motor"],["servo motor","servo motor"],["7 segment","7 segment"],["touch switch","toch switch"],["dual switch","dual switch"],["heartbeat","heartbeat"],["metal sensor","metal sensor"],["light sensor","light sensor"],["temperature senor","temperature sensor"],["humidity sensor","humidity sensor"]]

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

a3devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["servo motor","servo motor"],["touch switch","toch switch"],["dual switch","dual switch"],["heartbeat","heartbeat"],["metal sensor","metal sensor"],["light sensor","light sensor"],["temperature senor","temperature sensor"],["humidity sensor","humidity sensor"]]
createPort("A3",a3devices);
devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["DC motor","DC motor"],["geared motor","geared motor"],["servo motor","servo motor"],["7 segment","7 segment"],["touch switch","toch switch"],["dual switch","dual switch"],["heartbeat","heartbeat"],["metal sensor","metal sensor"],["light sensor","light sensor"],["temperature senor","temperature sensor"],["humidity sensor","humidity sensor"]]

var a4devices=devices;
a4devices.splice(3,4);
createPort("A4",a4devices);

var b1devices=devices;
b1devices.splice(12,6);
b1devices.splice(5,1)
createPort("B1",b1devices);


var b2devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["7 segment","7 segment"],["touch switch","toch switch"],["dual switch","dual switch"],["heartbeat","heartbeat"],["metal sensor","metal sensor"],["light sensor","light sensor"],["temperature senor","temperature sensor"],["humidity sensor","humidity sensor"]];
createPort("B2",b2devices);

createPort("B3",b2devices);
createPort("B4",b2devices);

createPort("C1",b2devices);
createPort("C2",b2devices);
createPort("C3",b2devices);
createPort("C4",b2devices);

var f1devices=[["LED","LED"],["laser","laser"],["beeper","beeper"],["touch switch","toch switch"],["dual switch","dual switch"],["heartbeat","heartbeat"],["metal sensor","metal sensor"]]
createPort("F1",f1devices);
createPort("F2",f1devices);


createPort("G1",f1devices);
createPort("G2",f1devices);

var m1devices=[["DC motor","DC motor"],["geared motor","geared motor"]]
createPort("M1",m1devices);
createPort("M2",m1devices);
createPort("M3",m1devices);
createPort("M4",m1devices);



