/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

var currentAge = 26;
var maxAge = 100;
var estAmtPerDay = 4;
var lifeSupply = (estAmtPerDay * 365.25) * (maxAge - currentAge);

console.log("------Supply Calculator-------");
console.log("You will need " + lifeSupply + " to last you until the ripe old age of "
 + maxAge);