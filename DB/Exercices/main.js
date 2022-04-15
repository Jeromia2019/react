const { connect, Schema, model } = require('mongoose');

connect('mongodb://localhost:27017/formation', (err) => console.log(err ? err : "vous etes connecté !"));

const stagiaireSchema = new Schema({
    "nom": { type: String, required: true },
    "prenom": String,
});

const Stagiaire = model("stagiaires", stagiaireSchema);

const stagiaires = new Stagiaire();
stagiaires.nom = "Jeromia";
stagiaires.prenom = "Dieu";
stagiaires.save((err) => console.log(err ? err : "Sauvegarde des données réussie !"));



// Stagiaire.findOne({ nom: "Jeromia" }).exec().then(items => {
//     console.log(items.nom);
// }); // Jeromia

// Rajouter une section: String sur Stagiaire 
// + resultat_annuel: Mixed