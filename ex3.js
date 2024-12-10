const prompt = require("prompt-sync")({sigint : true})

var phrase = prompt(`Entrée une phrase : `)

console.log(`Longeur de la phrase : ${phrase.length}`)
console.log(phrase.toUpperCase())
if (phrase.includes(`JavaScript`)){
    console.log(`JavaScript et dans la phrase`)
}