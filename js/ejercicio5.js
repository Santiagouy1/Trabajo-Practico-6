/*

Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un
bucle para encontrar el número más grande. Usa condicionales para comparar los valores

*/

const numero = [23, 45, 12, 67, 34, 89, 21];

let numeroMasGrande = numero[0];

for (let i = 1; i < numero.length; i++) {
  if (numero[i] > numeroMasGrande) {
    numeroMasGrande = numero[i];
  }
}

console.log("El número más grande es:", numeroMasGrande);
