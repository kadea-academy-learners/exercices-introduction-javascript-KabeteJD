// Exercice 9
// Écrivez votre code ici

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
