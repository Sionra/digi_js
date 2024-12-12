const Vehicule = require('./vehicule');

class Bateau extends Vehicule{
    constructor(nom){
        super(nom)
    }

    klaxonner(){
        console.log(`Le bateau fait un bruit de trompette`)
    }
}

module.exports = Bateau;