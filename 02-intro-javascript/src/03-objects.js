const person = {
    nombre: "Luke",
    apellido: "Skywalker",
    edad: 21,
};

// Los objetos se pasan por referencia!!!
const person2 = person;
person2.edad = 22

console.log( { person } )
console.log( { person2 } )

// Para crear una copia del objeto y todas sus propiedades:
// usar ... (spread)
const person3 = { ...person }
person3.edad = 60
console.log( person3 )
console.log( person )