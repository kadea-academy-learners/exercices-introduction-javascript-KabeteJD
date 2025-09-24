// Exercice 9
// Écrivez votre code ici

<<<<<<< HEAD
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let patrimoineTotal = maison + terrains + liquidites;

let partPremiereCategorie = patrimoineTotal * 0.75;
let partDeuxiemeCategorie = patrimoineTotal * 0.25;

//  Première catégorie : enfants
let partParEnfant = partPremiereCategorie / 3;
let paul = partParEnfant;
let marie = partParEnfant;

// Alain est décédé, sa part est partagée entre Éric et Claire
let alain = partParEnfant;
let eric = alain / 2;
let claire = alain / 2;

/*Deuxième catégorie : conjoint + frère + nièce*/
let partParPersonneDeuxiemeCat = partDeuxiemeCategorie / 3;
let madameMukuna = partParPersonneDeuxiemeCat;
let joseph = partParPersonneDeuxiemeCat;
let sarah = partParPersonneDeuxiemeCat;

// Affichage des résultats
console.log("Répartition de l’héritage de Monsieur Jean MUKUNA :");
console.log("Paul :", paul.toLocaleString(), "CDF");
console.log("Marie :", marie.toLocaleString(), "CDF");
console.log("Éric :", eric.toLocaleString(), "CDF");
console.log("Claire :", claire.toLocaleString(), "CDF");
console.log("Madame MUKUNA :", madameMukuna.toLocaleString(), "CDF");
console.log("Joseph :", joseph.toLocaleString(), "CDF");
console.log("Sarah :", sarah.toLocaleString(), "CDF");
=======
const maison = 60000000;
const terrains = 40000000;
const liquidites = 20000000;
const totalHeritage = maison + terrains + liquidites;

const partGroupe1 = totalHeritage * 0.75;
const paul = partGroupe1 / 3;
const marie = partGroupe1 / 3;
const eric = (partGroupe1 / 3) / 2;
const clair = (partGroupe1 / 3) / 2;

const partGroupe2 = totalHeritage * 0.25;
const madameMukuna = partGroupe2 / 3;
const joseph = partGroupe2 / 3;
const sarah = partGroupe2 / 3;

console.log("Paul :", paul);
console.log("Marie :", marie);
console.log("Éric :", eric);
console.log("Clair :", clair);
console.log("Madame Mukuna :", madameMukuna);
console.log("Joseph :", joseph);
console.log("Sarah :", sarah);
>>>>>>> feat/03-operator-1
