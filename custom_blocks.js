


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
        "message0":"wait h %1 m %2 s %3",
        "args0":
        [

          {
            "type":"field_number",
            "name":"HRS",
            "value":0,
            "min":0,
            "max":24,
            "check":"Number"
          },
          {
            "type":"field_number",
            "name":"MIN",
            "value":0,
            "min":0,
            "max":60,
            "check":"Number"
          },
          {
            "type":"field_number",
            "name":"SEC",
            "value":0,
            "min":0,
            "max":60,
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
            ["A4","A4"]
          ]
        },
        {
          "type":"field_dropdown",
          "name":"DEV",
          "options":[
            ["Tact switch","Tatch switch"],
            ["Touch switch","Touch switch"],
            ["Dual switch","Dual switch"],
            ["Heartbeat","Heartbeat"],
            ["Metal sensor","Metal sensor"]
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
