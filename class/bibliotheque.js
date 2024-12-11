class Bibliotheque{
    constructor(nom){
        this.nom = nom
        this.listeLivre = []
    }

    addLivre(livre){
        this.listeLivre.push(livre)
    }

    chercheLivre(titre){
        for ( let i of this.listeLivre){
            if ( i.titre === titre){
                return i
            }
        }
    }

    afficherLivres() {
        console.log("Liste des livres dans la bibliothèque:");
        this.listeLivre.forEach(livre => console.log(livre));
    }
}

module.exports = Bibliotheque