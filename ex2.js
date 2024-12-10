const prompt = require("prompt-sync")({sigint : true})

var age = parseInt(prompt("Quel est votre age ? "))

if ( isNaN(age) || age < 0){
    console.log(`Input non valide`)
} else {
    if (age < 18 ){
        console.log(`Vous êtes mineur.`)
    } else {
        console.log(`Vous êtes majeur.`)
    }
}