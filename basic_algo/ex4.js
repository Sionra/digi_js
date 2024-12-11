const possibleCharacter = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&()_+*/|\\`
const length = Math.floor(Math.random() * 30)
let counter = 0
let pwd = ``

do{
    pwd += possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));
    counter++
} while (counter < length)

console.log(pwd)
