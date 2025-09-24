// Exercice 9
// Écrivez votre code ici

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
