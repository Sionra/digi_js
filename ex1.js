const prompt = require("prompt-sync")({sigint : true})

var num1 = prompt('Enter a 1st Number : ')
var num2 = prompt('Enter a 2nd Number : ')



console.log(`Addition : ${parseInt(num1) + parseInt(num2)}`)
console.log(`Soustraction : ${num1 - num2}`)
console.log(`Multiplication : ${num1 * num2}`)
console.log(`Division : ${num1 / num2}`)