var symbol = true;

function btn(num)
{
	if(symbol)
	{
		var a = document.getElementById("calc").value   += num;
	}

}

function Sign(sign)
{
	if(symbol)
	{
		var b = document.getElementById("calc").value += sign;
	}
}

function Clear()
{
	document.getElementById("calc").value = " ";	
}


function result( )
{
	var calc = document.getElementById("calc").value;
	var plus = calc.indexOf("+");
	var mult = calc.indexOf("*");
	var minus = calc.indexOf("-");	
	var divide = calc.indexOf("/");
	
	if(plus >= 0)
	{   
		
			
		var a = calc.slice(0 , plus);
		var b = calc.slice(plus, calc.length);
		a = parseFloat(a);
		b = parseFloat(b);
		var result;
		result =  a + b;
	}
	document.getElementById("calc").value = result;
	
	
	if(mult >= 0)
	{
		var a = calc.slice(0 , mult);
		var b = calc.slice(mult + 1, calc.length);
        a = parseFloat(a);
		b = parseFloat(b);
		result =  a * b;	
		
	document.getElementById("calc").value = result ;

	}

     if(minus >=0){
		 a = calc.slice(0, minus);
		 b = calc.slice(minus + 1, calc.length);
		 a = parseFloat(a);
		 b = parseFloat(b);
		 
		 result =  a - b;
		 }
		 		 document.getElementById("calc").value = result;

	
	
	
	 if(divide >=0){
		 
		 a = calc.slice(0, divide);
		 b = calc.slice(divide +1, calc.length);
		 a = parseFloat(a);
		 b = parseFloat(b);
		 result=  a / b;
		 }
		 document.getElementById("calc").value = result;
	
}



