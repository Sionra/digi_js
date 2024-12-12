const Vehicule = require('./vehicule');

class Voiture extends Vehicule{
    constructor(nom){
        super(nom)
    }

    klaxonner(){
        console.log(`La voiture klaxonne`)
    }
}

module.exports = Voiture;