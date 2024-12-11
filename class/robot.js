class Robot{
    constructor(nom, x = 0, y = 0){
        this.positionNettoyees = []
        this.nom = nom
        this.x = x
        this.y = y
        this.lastD = ``
    }

    seDeplacer(direction){
        switch(direction){
            case `haut` :
                this.y--
                this.lastD = direction
                break;
            case `droite`:
                this.x++
                this.lastD = direction
                break;
            case `bas`:
                this.y++
                this.lastD = direction
                break;
            case `gauche`:
                this.x--
                this.lastD = direction
                break;
        }
    }

    nettoyer(){
        console.log(`La case actuelle est propre`)
        this.positionNettoyees.push(`[${this.x},${this.y}]`)
    }

    afficherPosition(){
        console.log(`Position actuelle : [${this.x},${this.y}]`)
    }

    reinitialiserPosition(){
        this.x = 0
        this.y = 0
    }

    historiqueNettoyage(){
        for ( let value of this.positionNettoyees){
            console.log(value)
        }
    }

    reculer(){
        switch(this.lastD){
            case `haut` :
                this.y++
                break;
            case `droite`:
                this.x--
                break;
            case `bas`:
                this.y--
                break;
            case `gauche`:
                this.x++
                break;
        }
    }
}

module.exports = Robot