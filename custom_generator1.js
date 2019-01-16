
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
/*
Blockly.JavaScript['if_do']=function(blocks)
{
	var code=""
	var targetBlock=this.getInputTargetBlock('CONDITION') ;
	if(targetBlock)
	{
		target2=targetBlock.getInputTargetBlock('VAL');
		if(target2)
		{
			var value=target2.getFieldValue('VAL');

			var port=targetBlock.getFieldValue('PORT');
			var operator=targetBlock.getFieldValue('OP');
			if(value=='HIGH')
			{
				firstbyte='0',
				lastbyte='1'
			}	
			else if(value=='LOW')
			{
				firstbyte='0',
				lastbyte='1'
			}
			else
			{
				first16=parseInt(value) & 65280;
				last16=parseInt(value) & 255;
				first16=first16>>8;
//			alert(typeof last16)

				var firstbyte=first16.toString();
				var lastbyte=last16.toString();	
			}	
			if(operator== "<>")
			{
				targetBlock.appendValueInput("VAL2")
				alert("<><><><>")
			}
			var code="d00 "+port+firstbyte+lastbyte+operator
//			alert(code)
		}
		
	}
	
	return code
}*/

function generateByteformat(value)
{
	var firstbyte="";
	var lastbyte="";
	if(value=='HIGH')
	{
		firstbyte='0',
		lastbyte='1'
	}	
	else if(value=='LOW')
	{
		firstbyte='0',
		lastbyte='1'
	}
	else
	{
		first16=value & 65280;
		last16=value & 255;
		first16=first16>>8;
//			alert(typeof last16)

		firstbyte=first16.toString();
		lastbyte=last16.toString();	
	}
	return firstbyte+lastbyte;
}
/*
Blockly.JavaScript['if_do']=function(blocks)
{
	var code="";	
	var conditionBlock=this.getInputTargetBlock('CONDITION') ;
	
	if(conditionBlock)
	{
		var value1;
		var value2;
		conditiontype=conditionBlock.type;
		if(conditiontype=="logic_compare")
		{
			var port=conditionBlock.getFieldValue('PORT');
			var operator=conditionBlock.getFieldValue('OP');
			var value1Obj=conditionBlock.getInputTargetBlock('VAL');
			value1=0;
			if(value1Obj)
				value1=value1Obj.getFieldValue('VAL');
			value1byte=generateByteformat(value1);
			code="d00"+port+value1byte;
//			alert(code);
		}
		else if(conditiontype=="logic_between")
		{

			var port=conditionBlock.getFieldValue('PORT');
			var operator=conditionBlock.getFieldValue('OP');
			var value1Obj=conditionBlock.getInputTargetBlock('VAL1');
			var value2Obj=conditionBlock.getInputTargetBlock('VAL2');
			value1=0;
			if(value1Obj)
				value1=value1Obj.getFieldValue('VAL1');
			value2=0;
			if(value2Obj)
				value2=value1Obj.getFieldValue('VAL2');
		//	alert(typeof value2)
			var value1byte=generateByteformat(value1);
			var value2byte=generateByteformat(value2);
			alert(value2byte)	
			code="d"+value2byte+port+value1byte;
//			alert(code);
		}
	}
	return code;
}
*/

Blockly.JavaScript['if_do']=function(blocks)
{
	var code="";	
	var conditionBlock=this.getInputTargetBlock('CONDITION') ;
	
	if(conditionBlock)
	{
		var value1;
		var value2;
		var port=conditionBlock.getFieldValue('PORT');
		var operator=conditionBlock.getFieldValue('OP');
		
//		conditionBlock.getField("VAL2").setVisible(false);
		var value1=conditionBlock.getFieldValue("VAL1");
		var value2=0;
		if(operator=="<>")
		{
			value2=conditionBlock.getFieldValue("VAL2");
			if(value2<value1)
			{
				conditionBlock.getField("VAL2").setValue(value1);
			}
		}
		var value1byte=generateByteformat(value1);
		var value2byte=generateByteformat(value2);
//		alert(value2byte)
		code="d"
		code+=value2byte+port+value1byte+operator
	}
	var children=blocks.getChildren()
	if(children[0])
	{	ha=Blockly.JavaScript.blockToCode(children[0])
		
	}
	return code+ha;
}

Blockly.JavaScript['repeat']=function(blocks)
{
	code="r";
	var countBlock=this.getInputTargetBlock('COUNT');
	var count=0;
	if(countBlock)
		count=countBlock.getFieldValue('VAL');
	var children=blocks.getChildren()
	if(children[0])
		child=Blockly.JavaScript.blockToCode(children[0])	
	
	return "r"+child+" "+count.toString();	
}