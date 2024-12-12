const Robot = require('./class/robot');
const Bibliotheque = require('./class/bibliotheque');
const Livre = require('./class/livre');
const Voiture = require('./class/voiture');
const Vehicule = require('./class/vehicule');
const Bateau = require('./class/bateau');

let myRobot = new Robot(`Rob`)
let myBiblio = new Bibliotheque('La magie')

// Test de Robot
console.log("===== Robot =====")
myRobot.historiqueNettoyage()
myRobot.nettoyer()
myRobot.historiqueNettoyage()
myRobot.seDeplacer(`bas`)
myRobot.seDeplacer(`bas`)
myRobot.nettoyer()
myRobot.historiqueNettoyage()
myRobot.afficherPosition()
myRobot.reculer()
myRobot.nettoyer()
myRobot.historiqueNettoyage()
myRobot.reinitialiserPosition()

console.log("===== Bibliotheque / Livre =====")
// Test de Bibliotheque
let livre1 = new Livre('Harry Potter')
let livre2 = new Livre('Le seigneur des anneaux')
myBiblio.addLivre(livre1)
myBiblio.addLivre(livre2)
console.log(myBiblio.chercheLivre('Harry Potter'))
myBiblio.afficherLivres()

// Test Vehicule

console.log("===== Vehicule =====")
let myVehicule = new Vehicule()
myVehicule.deplacer()
let myVoiture = new Voiture()
myVoiture.deplacer()
myVoiture.klaxonner()
let myBateau = new Bateau()
myBateau.deplacer()
myBateau.klaxonner()