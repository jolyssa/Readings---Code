
document.querySelector("#h2Name").addEventListener('click', getName)

function getName(name) {
   document.querySelector("#name").innerText = (`Hello ${name}, it is very nice to meet you`)
   console.log(`Hello ${name}, it is very nice to meet you`)
}

getName("Jolyssa")

document.querySelector("#h2Age").addEventListener('click', getAge)

function getAge(age) {
    document.querySelector("#age").innerText = (`You are currently ${age} years old`)
    console.log(`You are currently ${age} years old`)
}

getAge("23")

//Use numbers 6 and 3 throughout
//Function add
function add(n1, n2) {
const sum = n1 + n2
console.log(sum)
}

add(6,3)

// then as a simple console log
console.log(6 + 3)


//Function subtract
function subtract(n1, n2) {
    const difference = n1 - n2
    console.log(difference)
}

subtract(6,3)

// then as a simple console log
console.log(6 - 3)


//Function multiply
function multiply(n1, n2) {
    const product = n1 * n2
    console.log(product)
}

multiply(6,3)

// then as a simple console log
console.log(6 * 3)



//Function divide
function divide(n1, n2) {
    const quotient = n1 / n2
    console.log(quotient)
}

divide(6,3)

// then as a simple console log
console.log(6 / 3)


//Values prediction
console.log(4 + 5)
//return 9
console.log("4 + 5")
//return "4 + 5"
console.log("4" + "5")
//return "45"
