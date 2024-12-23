/*

Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos
números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total
acumulado.

*/

let acumulado = 0; 

while (acumulado < 100) {
  
  let entrada = prompt("Introduce un número entero:");

  let numero = parseInt(entrada);

  if (!isNaN(numero)) {
    acumulado += numero; 
    console.log(`Número ingresado: ${numero} | Total acumulado: ${acumulado}`);
  } else {
    console.log("Por favor, introduce un número entero válido.");
  }
}

console.log(`El bucle ha terminado. El total acumulado es: ${acumulado}`);
