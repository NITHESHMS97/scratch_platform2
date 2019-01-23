
var validDevice=
{
	"A1":["led"],
	"A2":["led","beeper"]
}
var analogDevices=[];
var outputDevices=["led","beeper"];
var inputDevices=["swtich"];
Blockly.JavaScript['string_length'] = function(block) {
  // String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['wait']=function(block)
{
	var hrs=block.getFieldValue('HRS');
	var min=block.getFieldValue('MIN');
	var sec=block.getFieldValue('SEC');
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
	var conditionBlock=blocks.getInputTargetBlock('CONDITION') ;
	var child="";
	var isOutputOpen=false; 	
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
		{
			
			//child += Blockly.JavaScript.blockToCode(children[1]);
			var nextBlock=children[1];
			while(nextBlock)
			{
//				console.log(nextBlock.type);
				if(!isOutputOpen && nextBlock.type.includes('A'))
				{
					child+="o,{,";
					isOutputOpen=true;
				}	
				else if(!nextBlock.type.includes('A'))
				{
					child+="},";
					isOutputOpen=false;
				}
				child+=Blockly.JavaScript[nextBlock.type](nextBlock);

				nextBlock=nextBlock.getNextBlock();
			}
			if(isOutputOpen){
				isOutputOpen=false;
				child+="},";
			}
//			console.log(code+child+"0ED");
		}	
//			ifucan.innerHTML = children[1].type;
//			= children[1].getNextBlock().type;
	}	
	return code+child+"0ED,";

}
Blockly.JavaScript['logic_compare']=function(block)
{
	return "log_compare_block";
}
Blockly.JavaScript['repeat']=function(block)
{
	var code="l";
	var countBlock=block.getInputTargetBlock('COUNT');
	var count=0;
	if(countBlock)
		count=countBlock.getFieldValue('VAL');
	
	var children=block.getChildren();
	var child="";
	var isOutputOpen = false;
	if(children[0]) {
		//child=Blockly.JavaScript.blockToCode(children[0]);
		var nextBlock = children[0];
		while(nextBlock){
			//console.log(nextBlock.type);
			if(nextBlock.type.includes('A') && !isOutputOpen){
				child += "o,{,";
				isOutputOpen = true;
			}

			else if(!nextBlock.type.includes('A')){

					isOutputOpen = false;
					child += "},";
			}

			child += Blockly.JavaScript[nextBlock.type](nextBlock);
			nextBlock = nextBlock.getNextBlock(); 	
		}
		if(isOutputOpen) {
			child += "},";
			isOutputOpen = false;
		}
		
	}
	
//	return code+","+count.toString()+","+child;
	repeatf.innerHTML=children[0].type;
//	console.log(code+","+count.toString()+","+child+"0ED,")
	return code+",0,0,"+count.toString()+","+child+"0ED,";

}
Blockly.JavaScript['start']=function(block)
{
	var code="";
	var isOutputOpen=false;
	var children=block.getChildren()
	var output=new Array();
	var index=8;
	portskey=Object.keys(ports);
	output.push("R","T","5","1","1","S","E","T");
	for (var i=0;i<24;i++)
	{
		output.push("O");
	}
	if(children[0])
	{
		var nextBlock=children[0];
		while(nextBlock)
		{
			if( ports.includes(nextBlock.type)/*nextBlock.type.includes('A')*/ && !isOutputOpen)
			{
				code+="o,{,";
				device=nextBlock.getFieldValue('CONNECT')

				isOutputOpen=true;
			}
			else if(!ports.includes(nextBlock.type)/*!nextBlock.type.includes('A')*/ && isOutputOpen)
			{
				isOutputOpen=false;
				code+="},";
			}
			code+=Blockly.JavaScript[nextBlock.type](nextBlock)
			nextBlock=nextBlock.getNextBlock();
		}
		if(isOutputOpen)
		{
			code+="},";
			isOutputOpen=false;
		}
		
	}
//	console.log(code)
	var temp=new Array();
	temp=code.split(",");
	for(var i=0;i<temp.length;i++)
		output.push(temp[i]);
//	output.concat(temp);
	console.log(output);
	return code;
}
