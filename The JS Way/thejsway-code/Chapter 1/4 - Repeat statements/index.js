//Carousel
/*
Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.
*/

//For Loop

for(let i = 1; i <=10; i++){
    console.log(i);
}

//While Loop
let i = 1
while (i <=10) {
    console.log(i);
    i++;
}


//Parity
//Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
//This program uses the modulo operator %, which calculates the remainder after division of one number by another.
// It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

/*
Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a
number given by the user.

Info

This program must show exactly 10 numbers including the first one, not 11 numbers!
*/
//Pt.1
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0){
//     console.log(i)
//   }
// }

// //Pt.2
// for (let i = Number(prompt("Enter a number between 1-20.")); i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log("This number is odd.")
//   } else if (i % 2 === 0) {
//    console.log("This number is even.")
//   }
// }


//Input validation
/*
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.
*/

// let number = ""
// while (number >=100 ) {
//   number = prompt("Type a number below or equal to 100 to exit.")
// }
 //not working

// for (let i = Number(prompt("Enter a number")); i <= 100; i++) {
//   if (i <=100) {
//     console.log("That's right.")
//   } else {
//    i = Number(prompt("Try again"))
//   }
// }





//Multiplication table
/*
Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
*/

// Pt.1
// for (let i = Number(prompt("Enter a number between 1-10.")); i <= 20; i++) {
//   if (i = 2) {
//     console.log("2 * 1 = 2, 2 * 2 = 4, 2 * 3 = 6, 2 * 4 = 8, 2 * 5 = 10")
//   } else if (i = 9) {
//    console.log("9 * 1 = 9, 9 * 2 = 18, 9 * 3 = 27, 9 * 4 = 36, 9 * 5 = 45")
//   } else {
//     console.log("Please either enter the number two or nine.")
//   }
// }

//Neither yes nor no
/*
Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes"
 or "no" is typed, which ends the game.
 */



//FizzBuzz
/*Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
*/