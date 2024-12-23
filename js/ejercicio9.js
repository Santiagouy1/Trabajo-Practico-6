/*

Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el
usuario ingresa 12345, el programa debe devolver 54321.

*/

let number = prompt("Introduce un número entero positivo:");

while (isNaN(number) || number <= 0) {
    number = prompt("Por favor, introduce un número entero positivo:");
}

let reversedNumber = '';
for (let i = number.length - 1; i >= 0; i--) {
    reversedNumber += number[i];
}

console.log("Numero invertido: " + reversedNumber);
