class Bibliotheque{
    constructor(){
        this.listeLivre = []
    }

    addLivre(livre){
        this.listeLivre.push(livre)
    }

    chercheLivre(titre){
        for ( livre in this.listeLivre){
            if ( livre.titre === titre){
                return livre
            }
        }
    }
}