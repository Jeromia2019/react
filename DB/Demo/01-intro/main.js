/** MONGODB */
/*************
 * RECAP *//*
Le Schema est PRI-MOR-DIAL ! Sans lui,
les requètes ne savent pas aboutir même si elles pointent vers des champs ou des valeurs existantes.
Sensible à la casse ! et si on utilise agregate
- $addToSet, $sum, $avg, ....
$ = this. (est compris même dans le String ex: '$LOCALITE')
*/

const { connect, Schema, model } = require('mongoose');

connect('mongodb://localhost:27017/formation');

const commandSchema = new Schema({ id: Number, qtt: Number });

const stagiaireSchema = new Schema({
    "nom": { type: String, required: true },
    "prenom": String,
    "commandes": [commandSchema]
});
stagiaireSchema.virtual("fullName").get(() => `${this.nom} ${this.prenom}`);


const Stagiaire = model("stagiaires", stagiaireSchema);

Stagiaire.findOne({ nom: "Jeromia" }).exec().then(items => {
    console.log(items);
}); // Jeromia

const clientsSchema = new Schema({
    "NOM": { type: Schema.Types.Mixed, required: true },
    "LOCALITE": String,
});

const Clients = model("clients", clientsSchema);

// Clients.virtual;
Clients.findOne({ NOM: { $regex: /^M/, $options: 'i'} }, { LOCALITE: true}).exec().then(items => {
    console.log(items);
}); // MERCIER
Clients.findOne({ LOCALITE: "Namurrr" }).exec().then(items => {
    console.log(items?.LOCALITE);
}); // indefined (grace au ?. sinon plante)
Clients.findOne({ AA: "Namur" }).exec().then(items => {
    console.log(items);
}); // retourne le premier objet de la liste 
Clients.findOne({ AA: "Namur" }).exec().then(items => {
    console.log(items.AA);
}); // retourne undefined
Clients.findOne({ NOM: 1234 }).exec().then(items => {
    console.log(items);
}); // retourne undefined


// Pour ajouter des champs/table sans compass
// const s = new Stagiaire();
// s.nom = "Blop";
// s.commandes.push({ id: 2, qtt: 43 });
// s.biblop = "42";
// s.save();

// Rajouter une section: String sur Stagiaire 
// + resultat_annuel: Mixed