// Exercice 5
// Écrivez votre code ici
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C équivaut à " + celsiusToFahrenheit(celsius) + "°F");

module.exports = {celsiusToFahrenheit};