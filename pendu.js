"use strict"
const prompt = require("prompt-sync")({sigint : true})

let listeMotSecrets = ["Patate", 
    "Fraise", 
    "Senestre", 
    "Faquin", 
    "Finitude", 
    "Tares", 
    "Sophisme", 
    "Anagnorisis", 
    "Ambages",
    "Bejaune"]

let motMystere = listeMotSecrets[Math.floor(Math.random() * listeMotSecrets.length)]
motMystere = stringToArray(motMystere)
let tempWord = []
for ( let i = 0; i < motMystere.length - 1; i++){
    tempWord.push(`_`)
}


//7 essaie
let nbTry = 0
do {
    console.log(tempWord.toString())
    let usrTry = prompt('Entree un charactere : ')
    usrTry = usrTry.toLowerCase()
    if ( motMystere.includes(usrTry) ){
        for ( let i = 0; i < motMystere.length; i++ ){
            if (motMystere[i] === usrTry){
                tempWord[i] = motMystere[i]
            }
        }
    } else {
        nbTry++
    }
    if ( !tempWord.includes(`_`)){
        break
    }
} while (nbTry < 7)


    function stringToArray(chaine){
        let result = []
        chaine = chaine.trim()
        chaine = chaine.toLowerCase()
        for ( let i = 0; i <= chaine.length; i++){
                result.push(chaine[i])
        }
        return result
    }