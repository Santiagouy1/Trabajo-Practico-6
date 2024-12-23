/*

Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un
bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad
con su clasificación

*/

const edades = [18, 25, 14, 32, 16, 40];

for (let i = 0; i < edades.length; i++) {
  const edad = edades[i];
  if (edad >= 18) {
    console.log(`${edad} años: Mayor de edad`);
  } else {
    console.log(`${edad} años: Menor de edad`);
  }
}
