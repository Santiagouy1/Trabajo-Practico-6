/*

Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente
forma, donde el número de filas lo elija el usuario

*/


let filas = prompt("Introduci un numero de filas para el triangulo invertido de asteriscos:");

filas = parseInt(filas);

if (isNaN(filas) || filas <= 0) {
  console.log("introduci un numero entero valido y mayor que cero.");
} else {
  for (let i = filas; i >= 1; i--) {
    let linea = ""; 
    for (let j = 1; j <= i; j++) {
      linea += "*"; 
    }
    console.log(linea); 
  }
}
