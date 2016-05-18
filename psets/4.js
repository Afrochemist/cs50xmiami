/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...


	function cToF(celsius)   
{  
  var cTemp = celsius;  
  var cToFahr = cTemp * 9 / 5 + 32;  
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';  
    console.log(message);  
}  
  
function fToC(fahrenheit)   
{  
  var fTemp = fahrenheit;  
  var fToCel = (fTemp - 32) * 5 / 9;  
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';  
    console.log(message);  
}   
cToF(60);  
fToC(45);  