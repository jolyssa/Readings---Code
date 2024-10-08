//Following day
/*
Write a program that accepts a day name from the user, then shows the name of the 
following day. Incorrect inputs must be taken into account.
*/

// document.querySelector('#execute').addEventListener('click', findFollowingDay)

// function findFollowingDay(){

//     let day = document.querySelector('#dayOfWeek').value.toLowerCase()

//     if (day === "monday") {
//         document.querySelector('#showDayOfWeek').innerText = "The following day is Tuesday!"
//     } else if (day === "tuesday") {
//         document.querySelector('#showDayOfWeek').innerText = "The following day is Wednesday!"
//     } else if (day === "wednesday") {
//         document.querySelector('#showDayOfWeek').innerText = "The following day is Thursday!"
//     } else if (day === "thursday") {
//         document.querySelector('#showDayOfWeek').innerText = "The following day is Friday!"
//     } else if (day === "friday") {
//         document.querySelector('#showDayOfWeek').innerText = "The following day is Saturday!"
//     } else if(day === "saturday") {
//         document.querySelector('#showDayOfWeek').innerText = "The following day is Sunday!"
//     } else if (day === "sunday") {
//         document.querySelector('#showDayOfWeek').innerText = "The following day is Monday!"
//     } else {
//         document.querySelector('#showDayOfWeek').innerText = "Not a valid input."
//     }
// } 


// with switch, case, and breaks

    // let day = document.querySelector('#dayOfWeek').value.toLowerCase()

    // switch (day) {
    //     case "monday":
    //         console.log("The following day is Tuesday!");
    //         break;
    //     case "tuesday":
    //         console.log("The following day is Wednesday!");
    //         break;
    //     case "wednesday":
    //         console.log("The following day is Thursday!")
    //         break;
    //     case "thursday":
    //         console.log("The following day is Friday!")
    //         break;
    //     case "friday":
    //         console.log("The following day is Saturday!")
    //         break;
    //     case "saturday":
    //         console.log("The following day is Sunday!")
    //         break;
    //     case "sunday":
    //         console.log("The following day is Monday!")
    //         break;
    //     default:
    //         console.log("Invalid input.")
    // }



//Number comparison
/*
Write a program that accepts two numbers, then compares their values and displays 
an appropriate message in all cases.
*/

//?????? idk



//Take a look at the following program.

//     let nb1 = Number(prompt("Enter nb1:"));
//     let nb2 = Number(prompt("Enter nb2:"));
//     let nb3 = Number(prompt("Enter nb3:"));
    
//     if (nb1 > nb2) {
//       nb1 = nb3 * 2;
//     } else {
//       nb1++;
//       if (nb2 > nb3) {
//         nb1 += nb3 * 3;
//       } else {
//         nb1 = 0;
//         nb3 = nb3 * 2 + nb2;
//       }

// console.log(nb1, nb2, nb3);

//Before executing it, try to guess the final values of variables nb1,
// nb2 and nb3 depending on their initial values. Complete the following table.

/*
Initial values	nb1 final value	nb2 final value	nb3 final value
nb1 = nb2 = nb3 = 4			// nb1 = 0, nb2 = 4, nb3= 12 
nb1 = 4, nb2 = 3, nb3 = 2   // nb1 = 4, nb2 = 3, nb3 = 2	
nb1 = 2, nb2 = 4, nb3 = 0	// nb1 = 0, nb2 = 4, nb3 = 0
Check your predictions by executing the program.
*/


//Number of days in a month
/*
Write a program that accepts a month number (between 1 and 12), then shows the number of\
days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
*/

//if month = 1,3, 5, 7, 8, 10, 12, then it will have 31 days
//if month = 4, 6, 8, 11, then 30 days
//if month = 2, then 28 days
//if below or over 1-12, then invalid

// const month = {
//     from: 1,
//     to: 12
// };


function getMonth() {
const month = Number(prompt("Enter a month number:"));

    if ((month === 1) || (month === 3) || (month === 5) || (month === 7) || (month === 8)|| (month === 10) || (month === 12)) {
        console.log("This month has 31 days.")
    } else if ((month === 4) || (month === 6) || (month === 9) || (month === 11) || (month === 4)) {
        console.log("This month has 31 days.")
    } else if (month === 2) {
        console.log("This month has 28 days.")
    } else {
        console.log("Invalid month!")
    }
}

getMonth()