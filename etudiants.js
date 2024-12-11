let etudiants = [
    {
        nom: `Patate`,
        note: 15
    },
    {
        nom: `Fraise`,
        note: 10
    },
    {
        nom: `Orange`,
        note: 18
    },
    {
        nom: `Mirtille`,
        note: 6
    }
]

console.log(noteAuDessus(15))

function noteAuDessus(seuil){
    let sum = 0
    let count = 0
    etudiants.filter((current) => {
        if (current.note >= seuil){
            count++
            sum += current.note
        }
    })
    if ( count != 0 ){
        return sum / count
    }
    return null
}