/*

Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para
permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén
el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.

*/

const numeroRandom = Math.floor(Math.random() * 10) + 1;

let numeroAdivinadoCorrecto = false;

while (!numeroAdivinadoCorrecto) {
  const usuarioAdivinando = parseInt(prompt("Adivina el numero entre 1 y 10:"), 10);

  if (isNaN(usuarioAdivinando) || usuarioAdivinando < 1 || usuarioAdivinando > 10) {
    alert("Por favor, ingresa un numero valido entre 1 y 10.");
    continue;
  }

  if (usuarioAdivinando === numeroRandom) {
    alert("¡Felicidades! Adivinaste el numero.");
    numeroAdivinadoCorrecto = true; 
  } else if (usuarioAdivinando < numeroRandom) {
    alert("El numero es mayor. Intentalo de nuevo.");
  } else {
    alert("El numero es menor. Intentalo de nuevo.");
  }
}

