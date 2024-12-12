const mot1 = `Welcome to my Kingdom`
const mot2 = `Two Milkmen Go Comedy`

console.log(isAnagram(mot1, mot2))

function isAnagram(chaine1, chaine2){
    if ( chaine1.length != chaine2.length){
        return false
    }
    let obj1 = stringToObject(chaine1)
    let obj2 = stringToObject(chaine2)
    for ( value in obj1 ){
        if ( value in obj2 ){
            if (chaine1.value != chaine2.value){
                return false
            }
        } else {
            return false
        }
    }
    return true
}

function stringToObject(chaine){
    let result = {}
    chaine = chaine.trim()
    chaine = chaine.toLowerCase()
    for ( let i = 0; i <= chaine.length; i++){
        if ( chaine.charAt(i) in result){
            result[chaine.charAt(i)] += 1
        } else {
            result[chaine.charAt(i)] = 1
        }
    }
    return result
}