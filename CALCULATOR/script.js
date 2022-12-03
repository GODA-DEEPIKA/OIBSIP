const buttons = document.querySelectorAll('button'); 
const textBox = document.querySelector('.display');
buttons.forEach( function(bt) {
bt.addEventListener('click', calculate); 
} );
function calculate(bt)		 
{
const clickedBtValue = bt.target.value;	 
if (clickedBtValue === "AC") {
textBox.value = "";	
} 	 
else if(clickedBtValue === "=") 
{
if(textBox.value !== "") {
textBox.value = eval(textBox.value);
}
} else {
textBox.value = textBox.value + clickedBtValue;	  
}
}
