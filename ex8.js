const prompt = require("prompt-sync")({sigint : true})


const numtofound = Math.floor(Math.random() * 99) + 1
let count = 0
let found = false
let usrInput

do{
    do{
        usrInput = parseInt(prompt('Enter a Number : '))
    } while ( isNaN(usrInput) || usrInput < 1 || usrInput > 100)
        count++
        if (usrInput < numtofound){
            console.log(`Your number is under`)
        } else if ( usrInput > numtofound ){
            console.log(`Your number is above`)
        } else {
            found = true
        }
        console.log(found)
} while (count < 5 && !found)

    if (found){
        console.log(`☆*: .｡. o(≧▽≦)o .｡.:*☆ \nCongratulation you found it in ${count} hit`)
    } else{
        console.log(`(┬┬﹏┬┬) tou didn't find it, the number was : ${numtofound}`)
    }