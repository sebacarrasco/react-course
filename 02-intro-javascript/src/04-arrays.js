const arreglo = [1, 2, 3, 4];

// Recordar que los objetos se pasan por referencia!!!
let arreglo2 = arreglo;
arreglo2.push(5)
console.log(arreglo)
console.log(arreglo2)

// Ahora con spread
console.log("Copiando con spread...");
let arreglo3 = [...arreglo];
arreglo3.push(5);
console.log(arreglo);
console.log(arreglo3);

console.log("Copiando con map");
const arreglo4 = arreglo.map((element) => element);
arreglo4.push(6);
console.log(arreglo);
console.log(arreglo4);