/*All the accessory blocks other than ports are generated here*/
/*-------------*/
/*Varaible output blocks-------------------------------------------------------------------------------*/
/*code to generate IOT block with 2 dropdown*/  
Blockly.Blocks['IOT'] = {
  init: function() {
    this.jsonInit({
      "message0": 'BiIOT %1 equals to %2 %3',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"Bic",
          "options":[
            ["1","1"],
            ["2","2"],
            ["3","3"],
            ["4","4"],
            ["5","5"],
            ["6","6"],
            ["7","7"],
            ["8","8"],
            ["9","9"],
            ["10","10"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"PORT",
          "options":[
            ["value","0"],
            ["A1","1"],
            ["A2","2"],
            ["A3","3"],
            ["A4","4"],
            ["B1","7"],
            ["B2","8"],
            ["B3","9"],
            ["B4","10"],
            ["C1","11"],
            ["C2","12"],
            ["C3","13"],
            ["C4","14"],
            ["F1","23"],
            ["F2","24"],
            ["F3","25"],
            ["F4","26"],
            ["G1","27"],
            ["G2","28"],
            ["G3","29"],
            ["G4","30"],
            ["M1","31"],
            ["M2","32"],
            ["BiCounter1","37"],
            ["BiCounter2","38"],
            ["BiCounter3","39"],
            ["BiFlag1","40"],
            ["BiFlag2","41"],
            ["BiFlag3","42"],
            ["BiData1","43"],
            ["BiData2","44"],
            ["BiData3","45"],
            ["Ble_Remote","46"],
            ["Bt_Slider","47"],
            ["Red","69"],
            ["Green","70"],
            ["Blue","71"],
            ["Proximity","73"],
            ["Gesture","74"]
          ]
        },
        {
          "type":"field_number",
          "name":"Value"
        }
      ],

      "previousStatement": null,
      "nextStatement": null,
      "colour": 180
    });
  }
};
/**  BiData block */
Blockly.Blocks['BiData'] = {
  init: function() {
    this.jsonInit({
      "message0": 'BiData %1 equals to %2 %3',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"Bic",
          "options":[
            ["1","1"],
            ["2","2"],
            ["3","3"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"PORT",
          "options":[
            ["value","0"],
            ["A1","1"],
            ["A2","2"],
            ["A3","3"],
            ["A4","4"],
            ["B1","7"],
            ["B2","8"],
            ["B3","9"],
            ["B4","10"],
            ["C1","11"],
            ["C2","12"],
            ["C3","13"],
            ["C4","14"],
            ["F1","23"],
            ["F2","24"],
            ["F3","25"],
            ["F4","26"],
            ["G1","27"],
            ["G2","28"],
            ["G3","29"],
            ["G4","30"],
            ["M1","31"],
            ["M2","32"],
            ["BiCounter1","37"],
            ["BiCounter2","38"],
            ["BiCounter3","39"],
            ["BiFlag1","40"],
            ["BiFlag2","41"],
            ["BiFlag3","42"],
            ["BiData1","43"],
            ["BiData2","44"],
            ["BiData3","45"],
            ["Ble_Remote","46"],
            ["Bt_Slider","47"],
            ["Red","69"],
            ["Green","70"],
            ["Blue","71"],
            ["Proximity","73"],
            ["Gesture","74"]
          ]
        },
        {
          "type":"field_number",
          "name":"Value"
        }
      ],

      "previousStatement": null,
      "nextStatement": null,
      "colour": 180
    });
  }
};
/*BiFlag block */
Blockly.Blocks['BiFlag'] = {
  init: function() {
    this.jsonInit({
      "message0": 'BiFlag %1 boolean: %2',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"Bic",
          "options":[
            ["1","1"],
            ["2","2"],
            ["3","3"]
            
          ]
        },
        {
          "type":"field_dropdown",
          "name":"boolean",
          "options":[
            ["True","True"],
            ["False","False"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180
    });
  }
};
/** BiCounter blocks*/
Blockly.Blocks['BiCounter'] = {
  init: function() {
    this.jsonInit({
      "message0": 'BiCounter %1 %2intial value: %3',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"Bic",
          "options":[
            ["1","1"],
            ["2","2"],
            ["3","3"]
            
          ]
        },
        {
          "type": "field_checkbox",
          "name": "checkbox",
          "checked": true  
        },
        {
          "type":"field_number",
          "name":"INIT"
        }
      ],
      "message1": "%1 value: %2",
      "args1": [
        {
          "type":"field_dropdown",
          "name":"direction",
          "options":[
            ["+","+"],
            ["-","-"]            
          ]
        },
        {
          "type":"field_number",
          "name":"VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180
    });
  }
};
/** ------------------------------------------------------------------------------------ */
/** Variable input blocks------------------------------------------------------------------------------- */
/** IOT if condition blocks */
Blockly.Blocks['IOTinput'] = {
  init: function() {
    this.jsonInit({
      "message0": 'IOT %1 %2 %3 %4',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"cnt",
          "options":[
            ["1","1"],
            ["2","2"],
            ["3","3"],
            ["4","4"],
            ["5","5"],
            ["6","6"],
            ["7","7"],
            ["8","8"],
            ["9","9"],
            ["10","10"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"OP",
          "options":[
            ["<>","<>"],
            ["=","="],
            [">",">"],
            ["<","<"],
            ["!=","!="]
            
          ]
        },
        {
          "type":"field_number",
          "name":"VAL1"
        },
        {
          "type":"field_number",
          "name":"VAL2",
          "visible_":true
        }

      ],


      "inputsInline":true,
      "output":"String",
      "colour": 300
    });
  }
};
/**BiCounter BiFlag BiData all together as Bivariable */
Blockly.Blocks['Bivariable'] = {
  init: function() {
    this.jsonInit({
      "message0": '%1 %2 %3 %4 %5',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"variable",
          "options":[
            ["BiCounter","BiCounter"],
            ["BiFlag","BiFlag"],
            ["BiData","BiData"] 
          ]
        },
        {
          "type":"field_dropdown",
          "name":"cnt",
          "options":[
            ["1","1"],
            ["2","2"],
            ["3","3"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"OP",
          "options":[
            ["<>","<>"],
            ["=","="],
            [">",">"],
            ["<","<"],
            ["!=","!="]
            
          ]
        },
        {
          "type":"field_number",
          "name":"VAL1"
        },
        {
          "type":"field_number",
          "name":"VAL2",
          "visible_":true
        }

      ],


      "inputsInline":true,
      "output":"String",
      "colour": 300
    });
  }
};
/**-------------------------------------------------------------------------------------------------------- */
/** Special accessories Input Devices ----------------------------------------------------------------------*/
/** RFID  input special accessories */
Blockly.Blocks['RFID'] = {
  init: function() {
    this.jsonInit({
      "message0": ' B RFID %1 %2 %3',
      "args0": [
        
        {
          "type":"field_dropdown",
          "name":"OP",
          "options":[
            ["<>","<>"],
            ["=","="],
            [">",">"],
            ["<","<"],
            ["!=","!="]
            
          ]
        },
        {
          "type":"field_number",
          "name":"VAL1"
        },
        {
          "type":"field_number",
          "name":"VAL2",
          "visible_":true
        }

      ],


      "inputsInline":true,
      "output":"String",
      "colour": 300
    });
  }
};
/** Ultrasonic special accessories input devices-------------------- */
Blockly.Blocks['ultrasonic'] = {
  init: function() {
    this.jsonInit({
      "message0": '%1 ultrasonic %2 %3 %4',
      "args0": [
        
        {
          "type":"field_dropdown",
          "name":"PORT",
          "options":[
            ["F","F"],
            ["G","G"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"OP",
          "options":[
            ["<>","<>"],
            ["=","="],
            [">",">"],
            ["<","<"],
            ["!=","!="]
            
          ]
        },
        {
          "type":"field_number",
          "name":"VAL1"
        },
        {
          "type":"field_number",
          "name":"VAL2",
          "visible_":true
        }

      ],

      "inputsInline":true,
      "output":"String",
      "colour": 300
    });
  }
};
/** 4in1 special accessories input device  */
Blockly.Blocks['4in1'] = {
  init: function() {
    this.jsonInit({
      "message0": ' G 4 in 1: %1 %2 %3 %4',
      "args0": [
        
        {
          "type":"field_dropdown",
          "name":"PORT",
          "options":[
            ["Red","Red"],
            ["Blue","Blue"],
            ["Green","Green"],
            ["Distance","Distance"],
            ["Gesture","Gesture"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"OP",
          "options":[
            ["<>","<>"],
            ["=","="],
            [">",">"],
            ["<","<"],
            ["!=","!="]
            
          ]
        },
        {
          "type":"field_number",
          "name":"VAL1"
        },
        {
          "type":"field_number",
          "name":"VAL2",
          "visible_":true
        }

      ],

      "inputsInline":true,
      "output":"String",
      "colour": 300
    });
  }
};
/** special accessories output devices ----------------------------------------------------------------- */
/** MP3 device */
Blockly.Blocks['MP3'] = {
  init: function() {
    this.jsonInit({
      "message0": 'F MP3 %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check":"Number"
        }
      ],
      "nextStatement": "Action",
      "previousStatement":"Action",
      "colour": 180,
      "tooltip": "MP3",
    });
  }
};
/** Dot Matrix  */
Blockly.Blocks['Dot_Matrix'] = {
  init: function() {
    this.jsonInit({
      "message0": 'B Dot Matrix %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          
        }
      ],
      "nextStatement": "Action",
      "previousStatement":"Action",
      "colour": 180,
      "tooltip": "Dot Matrix",
    });
  }
};
/** Dot  matrix input Text   */
Blockly.Blocks['matrix_input'] = {
  init: function() {
    this.jsonInit({
      "message0": 'Text %1',
      "args0": [
        {
          "type": "field_input",
          "name": "VAL",
          "text": "max 5"
        }
      ],
       "output": "String",
      "colour": 240,
      
      "tooltip": "Dot Matrix"
    });
  }
};
/**-------------------------------------------------------------------------------------------------------- */
/** Value and logic---------------------------------------------------------------------------------------- */
/** Value block  */
Blockly.Blocks['value']={
  init: function(){
    this.jsonInit(

    {
        "message0":"value %1",
        "args0":
        [
          {
            "type":"field_number",
            "name":"VAL",
            "value":100
          }
        ],
        "output":"Number",
        "colour":240

    });
  }
}
/** Logic Block*/
Blockly.Blocks['logic'] = {
  init: function() {
    this.jsonInit({
      "message0": 'logic %1',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"VAL",
          "options":[["HIGH","HIGH"],["LOW","LOW"]]
        },
      ],
      "output":"String",
      "colour": 240
    });
  }
};
/**--------------------------------------------------------------------------------------------------------- */
/** Wait --------------------------------------------------------------------------------------------------- */
/** Wait block */
Blockly.Blocks['wait']={
  init: function(){
    this.jsonInit(
    {
        "message0":"wait h: %1 m: %2 s: %3 milli:%4",
        "args0":
        [

          {
            "type":"field_number",
            "name":"HRS",
            "value":0,
            "min":0,
            "max":23,
            "check":"Number"
          },
          {
            "type":"field_number",
            "name":"MIN",
            "value":0,
            "min":0,
            "max":59,
            "check":"Number"
          },
          {
            "type":"field_number",
            "name":"SEC",
            "value":0,
            "min":0,
            "max":59,
            "check":"Number"
          },
          {
            "type":"field_number",
            "name":"MILLI",
            "value":0,
            "min":0,
            "max":950,
            "check":"Number"
          }

        ],
        "nextStatement": "Action",
        "previousStatement":"Action",
        "colour":280

    });
  }
}
/**------------------------------------------------------------------------------------------------------- */
/** If Block ----------------------------------------------------------------------------------------------*/
Blockly.Blocks['if_do'] = {
  init: function() {
    this.jsonInit({
      "message0": 'if %1',
      "args0": [
        {
          "type":"input_value",
          "name":"CONDITION",
        },
      ],
      "message1":"do %1",
      "args1":[
      {
        "type":"input_statement",
        "name": "DO" 
      }
       
      ],
      "previousStatement":"Action",
      "nextStatement":"Action",
      "colour": 300
    });
  }
};
/**Compare block (block to be attached to if as condition block) */
Blockly.Blocks['logic_compare'] = {
  init: function() {
    this.jsonInit({
      "message0": '%1 %2 %3 %4 %5',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"PORT",
          "options":[
            ["A1","A1"],
            ["A2","A2"],
            ["A3","A3"],
            ["A4","A4"],
            ["A5","A5"],
            ["A6","A6"],
            ["B1","B1"],
            ["B2","B2"],
            ["B3","B3"],
            ["B4","B4"],
            ["C1","C1"],
            ["C2","C2"],
            ["C3","C3"],
            ["C4","C4"],
            ["D1","D1"],
            ["D2","D2"],
            ["D3","D3"],
            ["D4","D4"],
            ["E1","E1"],
            ["E2","E2"],
            ["E3","E3"],
            ["E4","E4"],
            ["F1","F1"],
            ["F2","F2"],
            ["F3","F3"],
            ["F4","F4"],
            ["G1","G1"],
            ["G2","G2"],
            ["G3","G3"],
            ["G4","G4"],
            ["M1","M1"],
            ["M2","M2"],
            ["M3","M3"],
            ["M4","M4"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"DEV",
          "options":[
            ["Tact switch","Tact switch"],
            ["Touch switch","Touch switch"],
            ["Dual switch","Dual switch"],
            ["Heartbeat","Heartbeat"],
            ["Metal sensor","Metal sensor"],
            ["Light sensor","Light sensor"],
            ["Distance sensor","Distance sensor"],
            ["Sound sensor","Sound sensor"],
            ["Gas sensor","Gas sensor"],
            ["Temperature sensor","Temperature sensor"],
            ["Humidity sensor","Humidity sensor"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"OP",
          "options":[
            ["<>","<>"],
            ["=","="],
            [">",">"],
            ["<","<"],
            ["!=","!="]
            
          ]
        },
        {
          "type":"field_number",
          "name":"VAL1"
        },
        {
          "type":"field_number",
          "name":"VAL2",
          "visible_":true
        }

      ],

      "inputsInline":true,
      "output":"String",
      "colour": 300
    });
  }
};
/**--------------------------------------------------------------------------------------------------------- */
/**Repeat block ---------------------------------------------------------------------------------------------*/
Blockly.Blocks['repeat'] = {
  init: function() {
    this.jsonInit({
      "message0": 'repeat %1 times',
      "args0": [
        {
          "type":"field_number",
          "name":"COUNT"
        },
      ],
      "message1":"do %1",
      "args1":[
      {
        "type":"input_statement",
        "name": "DO" 
      }
       
      ],
      "previousStatement":"Action",
      "nextStatement":"Action",
      "colour": 340

    });
  }
};
/**======================================================================================================== */
/**start block------------------------------------------------------------- */
Blockly.Blocks['start'] = {
  init: function() {
    this.jsonInit({
      "message0":"START",
      "colour": 0,
      "nextStatement": "Action",
      "START_HAT":true
    });
  }
};
/** This gives hat structure to the start block */
Blockly.BlockSvg.START_HAT = true;
/** End block----------------------------------------------------------------------------------------------- */
/**The end block with repeat and end option */
Blockly.Blocks['end'] = {
  init: function() {
    this.jsonInit({
      "message0": 'END %1',
      "args0": [
        {
          "type":"field_dropdown",
          "name":"TYPE",
          "options":[["REPEAT","REPEAT"],["END","END"]]
        },
      ],
      "previousStatement":"Action"
    });
  }
};
