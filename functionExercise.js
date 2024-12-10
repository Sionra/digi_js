function sayHi(name){
    return `Bonjour, ${name}`
}

let multiplyByTwo = (number) => {
    return number * 2
}

function calculateTotal(price, tax = 0.2){
    return price * (1-tax)
}