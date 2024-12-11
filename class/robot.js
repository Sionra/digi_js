class Robot{
    constructor(nom, x = 0, y = 0){
        this.nom = nom
        this.x = x
        this.y = y
    }

    seDeplacer(direction){
        switch(direction){
            case `haut` :
                this.y--
                break;
            case `droite`:
                this.x++
                break;
            case `bas`:
                this.y++
                break;
            case `gauche`:
                this.x--
                break;
        }
    }

    nettoyer(){
        console.log(`La case actuelle est propre`)
    }

    afficherPosition(){
        console.log(`[${this.x}, ${this.y}]`)
    }

    reinitialiserPosition(){
        this.x = 0
        this.y = 0
    }
}