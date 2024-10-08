function sayHi() {
    let name = prompt("Type your name here.")
    let message = `Hello ${name}, it is amazing to see you again today.`
    alert(message)
}

sayHi()

//Anonymous Function (long way)
const hello = function(name) {
    const message = `Hello ${name}!`
    return message
}

//Anonymous Function (short way w/ fat arrow)
const hello2 = (name) => {
    const message = `Hello ${name}!`
    return message
}

//When there's only one statement in the function body, everything can be written on the same line without curly braces. The return statement is omitted and implicit.
//When the function accepts only one parameter, parentheses around it can be omitted.
//Anonymous Function (even shorter way, simplified)

const hello3 = name => `Hello, ${name}!`

console.log(hello("Rexha"))
console.log(hello2("Rexha"))
console.log(hello3("Rexha")) //all return same result

//SayHi() as an anonymous function
// const sayHii = function(){
//     let name = prompt("Enter your name here.")
//     let message = `Hello ${name}, it is amazing to see you again today. Enjoy your time!`
//     alert(message)
// }

//call it in some way here 
// console.log(sayHii())

//Shorter version w. fat arrow

//Limiting function complexity
//A function body must be kept simple, or otherwise split into several sub-functions. As a rule of thumb, 30 lines of code should be a max for non-specific cases.


//Coding time!
//Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result

// function sayHi() {
//     const firstName = prompt("What is your first name?")
//     const lastName = prompt("What is your last name?")
//     const message = `Hello ${firstName} ${lastName}, great to see you again!`
//     alert(message);
// }

// sayHi()

//Number squaring
//Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
    // TODO: complete the function code
    const squaredNumber = x ** 2
    return(squaredNumber)
}

console.log(square1(10))

// Square the given number x
const square2 = x => x ** 2 // TODO: complete the function code

console.log(square2(10))

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
//When it's done, update the program so that it shows the square of every number between 0 and 10.
// TODO: complete the function code
function square3() {
    for(let i = 0; i <= 10; i++) {
        console.log(i ** 2) 
    }
}
square3()


//Minimum of two numbers
//Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns 
//the minimum of its two received numbers.
// TODO: write the min() function

function min(n1, n2) {
    if (n1 > n2) {
        return n2
    } else if (n1 < n2) {
        return n1
    } else if (n1 === n2) {
        return n1 || n2
    }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
console.log(min(44,20))
console.log(min(2013,3452))
console.log(min(123,125))
console.log(min(421,555))
console.log(min(2,6))
console.log(min(4,4))


//Calculator
//Complete the following program so that it offers the four basic arithmetical operations: 
//addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.
// TODO: complete program

calculate(n1, n2) {
   
}
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity


//Circumference and area of a circle
/*
Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.
*/
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3

