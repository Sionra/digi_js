let phrase = `Bonjour je suis un homme banane enchanté, je suis honnoré de vous rencontré`

console.log(analyserPhrase(phrase))


function analyserPhrase(phrase){
    let listMot = phrase.split(' ')
    let motPlusLong = ''
    let nbMot = {}
    listMot.forEach(element => {
        if ( element.length > motPlusLong.length){
            motPlusLong = element
        }
    });
    let patate = {}
    patate = listMot.reduce((listCount, now) => {
        if ( now in listCount ){
            listCount[now] += 1
        } else {
            listCount[now] = 1
        }
        return listCount
    }, {})
    let obj = {
        nbMot: listMot.length,
        motPlusLong : motPlusLong,
        nbEachMot : patate
    }
    return obj
}