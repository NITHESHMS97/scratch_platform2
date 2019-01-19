
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
	var code="1,"
	if(targetBlock)
	{
		var value=targetBlock.getFieldValue('VAL');
		if(value=='HIGH')
			code+="0,1,";
		else if(value=='LOW')
			code+="0,0,";
		else
		{
			first16=value & 65280;
			last16=value & 255;
			first16=first16>>8;
			code+=first16.toString()+",";
			code+=last16.toString()+",";
		}
		
	}
	msg1=code;
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
	var code="2,"
	if(targetBlock)
	{
		var value=targetBlock.getFieldValue('VAL');
		if(value=='HIGH')
			code+="0,1,";
		else if(value=='LOW')
			code+="0,0,";
		else
		{
			first16=value & 65280;
			last16=value & 255;
			first16=first16>>8;
			code+=first16.toString()+",";
			code+=last16.toString()+",";
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
	var time=hrsmili+minmili+secmili;
	byte4=time & 4278190080;
	byte3=time & 16711680;
	byte2=time & 65280;
	byte1=time & 255;
	byte2>>=8;
	byte3>>=16;
	byte4>>=24;
	msg3=" }w"+(hrsmili+minmili+secmili).toString();
//	return "w,"+(hrsmili+minmili+secmili).toString();
	return "w,"+byte4.toString()+","+byte3.toString()+","+byte2.toString()+","+byte1.toString()+",";

}


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
	return firstbyte+","+lastbyte+",";
}


Blockly.JavaScript['if_do']=function(blocks)
{

	var code="";	
	var conditionBlock=this.getInputTargetBlock('CONDITION') ;
	var child="" 	
	if(conditionBlock)
	{
		var value1;
		var value2;
		var portval;
		var port=conditionBlock.getFieldValue('PORT');
		var operator=conditionBlock.getFieldValue('OP');
		if(port=="A1")
			portval="1,";
		else if(port=="A2")
			portval="2,";
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
		var opascii=operator.charCodeAt().toString();
		code="d,";
		code+=value2byte+portval+value1byte+opascii+",";
		children=blocks.getChildren(false);
		//if(children[0])
		//	child += Blockly.JavaScript.blockToCode(children[0]);

		if(children[1])
			child += Blockly.JavaScript.blockToCode(children[1]);
//			ifucan.innerHTML = children[1].type;
//			= children[1].getNextBlock().type;
	}	
	return code+child;

}
Blockly.JavaScript['logic_compare']=function(blocks)
{
	return "log_compare_block";
}
Blockly.JavaScript['repeat']=function(blocks)
{
	var code="l";
	var countBlock=this.getInputTargetBlock('COUNT');
	var count=0;
	if(countBlock)
		count=countBlock.getFieldValue('VAL');
	
	var children=blocks.getChildren();
	var child="";
	if(children[0])
		child=Blockly.JavaScript.blockToCode(children[0]);
//	return code+","+count.toString()+","+child;
	repeatf.innerHTML=children[0].type;
	return code+","+count.toString()+","+child;
}

Blockly.JavaScript['start']=function(block)
{
	var code="";
	var children=block.getChildren()
	if(children[0])
	{

//		startgen.innerHTML=children[0].type;
		x=children[0].type;
		code=Blockly.JavaScript.blockToCode(children[0]);
		startgen.innerHTML=code;

	}
	return "";
}

