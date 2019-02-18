
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
      "colour": 160,
      "tooltip": "MP3",
    });
  }
};
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
      "colour": 160,
      "tooltip": "Dot Matrix",
    });
  }
};

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
      "colour": 160,
      
      "tooltip": "Dot Matrix"
    });
  }
};


Blockly.Blocks['value']={
  init: function(){
    this.jsonInit(

    {
        "message0":"value %1",
        "args0":
        [
          {
            "type":"field_number",
            "name":"VALUE",
            "value":100
          }
        ],
        "output":"Number",
        "colour":120

    });
  }
}

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
      "colour": 160
    });
  }
};

Blockly.Blocks['string_length'] = {
  init: function() {
    this.jsonInit({
      "message0": 'length of %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        }
      ],
      "output": "Number",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

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
        "colour":120

    });
  }
}

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
      "colour": 160
    });
  }
};

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
      "colour": 160
    });
  }
};


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
      "colour": 160

    });
  }
};

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
Blockly.BlockSvg.START_HAT = true;

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
