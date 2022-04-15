const { connect, Schema, model } = require('mongoose');

connect('mongodb://localhost:27017/formation', (err) => console.log(err ? err : "vous etes connecté !"));

const stagiaireSchema = new Schema({
    "nom": { type: String, required: true },
    "prenom": String,
    "resultat": Number,
    "section": String,
    "resultat_annuel": Number
});

const Stagiaire = model("stagiaires", stagiaireSchema);

Stagiaire
.aggregate()
.group({
    _id: "$section", 
    moyenne: { $avg: '$resultat' },
    nb: { $sum: 1 }
}) // donne la moyenne par section et le nombre de moyennes au total (nb)
.match({ 
    moyenne: { $gt: 15 } 
}) // affiche celle au dessus de 15
.exec()
.then(items => console.log(items))

// const stagiaires = new Stagiaire();
// stagiaires.nom = "Jeromia";
// stagiaires.prenom = "Dieu";
// stagiaires.resultat = 14;
// stagiaires.section = "js";
// stagiaires.save((err) => console.log(err ? err : "Sauvegarde des données réussie !"));
