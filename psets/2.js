/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...

	var snack = "Mochi";
	var expirationDate = "6 months";
	var rate = 3; // 3 per day
	var currentAge = 26;
	var maxAge = 70;
	var daysInAYear = 365;
	var differenceInYears = 44; 

console.log("You will need " + (rate * daysInAYear * differenceInYears) + " "+ snack + " for the rest of your life"  )