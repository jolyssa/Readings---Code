//Improved hello
/*Write a program that asks the user for his first name and his last name. 
The program then displays them in one sentence. */

let name = prompt("What is your first and last name?")

alert(`Hello ${name}, hope you're having a stellar day`)


//Predicting final values
let a = 2;
a -= 1;
a++;
//Final value will be 2
let b = 8;
b += 2;
//Final value will be 10
const c = a + b * b;
//Final value will be 2 + 10 * 10 = 102
const d = a * b + b;
//Final value will be 2 * 10 + 10 = 30
const e = a * (b + b);
//Final value will be 2 * (10 + 10) = 40
const f = a * b / a;
//Final value will be 2 * 10 / 2 = 10
const g = b / a * a;
//Final value will be  10 / 2 * 2 = 10
console.log(a, b, c, d, e, f, g);
//Final value will be 2, 10, 120, 30, 40, 10, 10


//VAT Calculation
/*
Write a program that asks the user for a raw price. After that, it calculates 
the corresponding final price using a VAT rate of 20.6%
*/

let rawPrice = Number(prompt("What is the raw price?"))
let vatCalculation = rawPrice * 0.206
alert(`The corresponding final price is $${vatCalculation}`)


//Celsius to Fahrenheit 
/*
Write a program that asks for a temperature in Celsius degrees, then displays 
it in Fahrenheit degrees.
The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
*/

let celsius = Number(prompt("What is your temperature in celsius?"))
let fahrenheit = celsius * 9/5 + 32
alert(`Your temperature in fahrenheit is ${fahrenheit} degrees`)


//Variable swapping
//Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
number1 -= 2
number2 += 2
console.log(number1); // Should show 3
console.log(number2); // Should show 5
//Add the necessary code to swap the values of variables number1 and number2.