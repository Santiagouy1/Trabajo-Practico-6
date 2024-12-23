/* 

Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa
que recorra el array con un bucle e imprima únicamente los números positivos. 

*/


const numero = [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9]

for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 0) {
        console.log(numero[i]);
    }
}
