
function code_generator(portname,logic_input)
{
	Blockly.JavaScript[portname]=function(block)
	{


		var targetBlock=block.getInputTargetBlock('VALUE');
		var device= block.getFieldValue('CONNECT')
		if(logic_input.includes(device))
			block.getInput('VALUE').setCheck('String')
		else	
		{

			block.getInput('VALUE').setCheck('Number');
			
		}	
		
		var code=(ports.indexOf(portname)+1).toString()+",";
		if(targetBlock)
		{
			var value=targetBlock.getFieldValue('VAL');
			if(device=="servo motor")
			{
				value=parseInt(value);
				value=1800+value*20;
			//	console.log(value);
			}
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


		return code;
		

	}

}

code_generator('A1',['LED','laser','beeper']);
code_generator('A2',['beeper']);
code_generator('A3',['beeper']);
code_generator('A4',['LED','laser','beeper']);
code_generator('B1',['LED','laser','beeper','7 segment']);
code_generator('B2',['LED','laser','beeper','7 segment']);
code_generator('B3',['LED','laser','beeper','7 segment']);
code_generator('B4',['LED','laser','beeper','7 segment']);
code_generator('C1',['LED','laser','beeper','7 segment']);
code_generator('C2',['LED','laser','beeper','7 segment']);
code_generator('C3',['LED','laser','beeper','7 segment']);
code_generator('C4',['LED','laser','beeper','7 segment']);
code_generator('F1',['LED','laser','beeper']);
code_generator('F2',['LED','laser','beeper']);
code_generator('G1',['LED','laser','beeper']);
code_generator('G2',['LED','laser','beeper']);
code_generator('M1',[]);
code_generator('M2',[]);



