/*

Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir
la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número
mayor a 1000, detén el bucle.

*/

const numero = +prompt("Ingrese un numero del 1 al 100")

if (numero >= 1 && numero <= 100) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        if (resultado > 1000) {
            console.log("Se detiene porque el resultado es mayor a 1000.");
            break;
        }
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("Por favor, ingresa un número válido entre 1 y 100.");
}