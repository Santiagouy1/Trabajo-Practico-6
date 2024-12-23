/*

Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa
un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra
es palíndroma si se lee igual al derecho y al revés.


*/


function esPalindroma(palabra) {
    return palabra.toLowerCase() === palabra.split('').reverse().join('').toLowerCase();
  }
  
  let input = prompt("Introduce una lista de palabras separadas por comas:");
  
  let palabras = input.split(',');
  
  let palindromas = palabras.filter(palabra => esPalindroma(palabra.trim()));
  
  if (palindromas.length > 0) {
    console.log("Palabras palíndromas encontradas:");
    console.log(palindromas.join(', '));
  } else {
    console.log("No se encontraron palabras palíndromas.");
  }
  