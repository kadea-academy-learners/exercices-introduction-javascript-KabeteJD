// Exercice 8
// Écrivez votre code ici

const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;        
let nourriture = salaireMensuel * 0.2;  
let transport = salaireMensuel * 0.1;    
let autresDepenses = 50 + 25;           
const totalDepenses = loyer + nourriture + transport + autresDepenses; 
let reste = salaireMensuel - totalDepenses;  

console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Total des dépenses :", totalDepenses);
console.log("Reste :", reste);