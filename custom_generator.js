
Blockly.JavaScript['A1']=function(block)
{


	var targetBlock=this.getInputTargetBlock('VALUE');
	var a1Device= this.getFieldValue('CONNECT')
	if(a1Device=='LED')
		this.getInput('VALUE').setCheck('String')
	else	
		this.getInput('VALUE').setCheck('Number')
	var code="1"
	if(targetBlock)
	{
		var value=targetBlock.getFieldValue('VAL');
		if(value=='HIGH')
			code+="01";
		else if(value=='LOW')
			code+="00";
		else
		{
			first16=value & 65280;
			last16=value & 255;
			first16=first16>>8;
			code+=first16.toString();
			code+=last16.toString();
		}
		
	}
	msg1=code;
	printIt();
	return code;
	

}

Blockly.JavaScript['A2']=function(block)
{

	var targetBlock=this.getInputTargetBlock('VALUE');
	var a1Device= this.getFieldValue('CONNECT')
	if(a1Device=='LED')
		this.getInput('VALUE').setCheck('String')
	else	
		this.getInput('VALUE').setCheck('Number')
	var code=""
	if(targetBlock)
	{
		code="2";
		var value=targetBlock.getFieldValue('VAL');
		if(value=='HIGH')
			code+="01";
		else if(value=='LOW')
			code+="00";
		else=
		{
			first16=value & 65280;
			last16=value & 255;
			first16=first16>>8;
			code+=first16.toString();
			code+=last16.toString();
		}
		
	}
	msg2=code;
	printIt();
	return code;
	

}


Blockly.JavaScript['string_length'] = function(block) {
  // String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

