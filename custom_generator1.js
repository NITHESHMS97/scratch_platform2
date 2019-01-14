Blockly.JavaScript['string_length'] = function(block) {
  // String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
};


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
	msg1=" "+code;
	printIt();
	return code;
	

}

Blockly.JavaScript['A2']=function(block)
{


	var targetBlock=this.getInputTargetBlock('VALUE');
	var a2Device= this.getFieldValue('CONNECT')
	if(a2Device=='LED')
		this.getInput('VALUE').setCheck('String')
	else	
		this.getInput('VALUE').setCheck('Number')
	var code="2"
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
	msg2=" "+code;
	printIt();
	return code;
	

}
Blockly.JavaScript['wait']=function(blocks)
{
	var hrs=this.getFieldValue('HRS');
	var min=this.getFieldValue('MIN');
	var sec=this.getFieldValue('SEC');
	var hrsmili=parseInt(hrs)*60*60*1000;
	var minmili=parseInt(min)*60*1000;
	var secmili=parseInt(sec)*1000;
	msg3=" }w"+(hrsmili+minmili+secmili).toString();
	return " w"+(hrsmili+minmili+secmili).toString();

}
Blockly.JavaScript['if_do']=function(blocks)
{
	var targetBlock=this.getInputTargetBlock('CONDITION');
	if(targetBlock)
	{
		target2=targetBlock.getInputTargetBlock('VAL');
		if(target2)
		{
			var value=target2.getFieldValue('VAL');
		}
		var port=targetBlock.getFieldValue('PORT');
		var operator=targetBlock.getFieldValue('OP');
		alert(operator);
	}

}