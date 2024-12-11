"use strict"

const addItem = (item) => {
    array.push(item)
}

const delItem = (id) => {
    array.splice(id, 1)
}

const doesExist = (item) => {
    return array.includes(item)
}

let array = ["test"]
array.find

addItem("Patate")
console.log(array)
delItem(1)
console.log(array)
console.log(doesExist("Patate"))
console.log(doesExist("test"))

