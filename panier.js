//un produit a un nom, et une quantité

let panier = {}

console.log(panier)
console.log(addProduit(`Patate`))
console.log(panier)
console.log(addProduit(`Patate`))
console.log(addProduit(`Fraise`))

console.log(panier)

function addProduit(produitNom){
    if ( produitNom in panier){
        panier[produitNom] +=1
    } else {
        panier[produitNom] = 1
    }
    // je dois retourner le total des objets
    let total = 0
    for ( i in panier ) {
        total += panier[i]
    }
    return total
}