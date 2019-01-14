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