"use strict"
let prenom = `alonzo`
let nom = `bistro`

const puissance = (num1, num2) => {
    return Math.pow(num1, num2)
}

const modulo = (num1, num2) => {
    return num1 % num2
}


console.log(getFullName(prenom, nom))

console.log(calculerAvance(2, 3, puissance))
console.log(calculerAvance(2, 3, modulo))

startTimer()

function getFullName(firstName, lastName){
    const capitalize = (chaine) => {
        let letter = chaine.charAt(0).toUpperCase()
        return letter + chaine.substring(1, chaine.length)
    }
    return capitalize(firstName) + ` ` + capitalize(lastName)
}

function calculerAvance(num1, num2, operation){
    return operation(num1, num2)
}

function startTimer(){
    let count = 0
    do{
        let temps = ++count
        setTimeout(() => console.log(temps + `s`), count*1000)
    } while (count < 10)
    setTimeout(() => console.log(`Temps écoulé!`), 10000)
}