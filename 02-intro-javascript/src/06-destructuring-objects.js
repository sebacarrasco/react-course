// Desestructuración o Asignación Desestructurante
const persona = {
    nombre: "Luke",
    edad: "22",
    clave: "wena"
};

// Se extrae la propiedad "nombre" del objeto y se guarda en la variable de igual nombre
const { nombre } = persona;
console.log(nombre);

// Se extrae la propiedad "nombre" del objeto y se guarda en la variable nombre2
const { nombre:nombre2 } = persona;
console.log(nombre2);

// Da lo mismo el orden!
const {nombre:name, edad, clave} = persona;
console.log(name, edad, clave);

const {clave:clave2, nombre:name2, edad:edad2} = persona;
console.log(name2, edad2, clave2);

// Se puede desestructurar en el argumento de una función
const funcion = ({ nombre }) => {
    console.log(nombre)
};
funcion(persona)

// Se puede desestructurar en el argumento de una función y poner valores por defecto
const funcion2 = ({ nombre, apellido="skywalker" }) => {
    console.log(nombre, apellido)
};
funcion2(persona)
funcion2( { ...persona, apellido: "kenobi"})

// Se puede hacer desestructuración anidada
const funcion3 = ({ nombre, edad, clave}) => {
    return {
        nombreClave: clave,
        anos: edad,
        coord: {
            lat: 123456,
            long: 789465
        }
    }
};

const { nombreClave, anos, coord:{lat, long}} = funcion3(persona);
console.log(nombreClave, anos, lat, long);
// Ojo que coord no está definido fuera de la funcion, solo lat y long
// Lo anterior es equivalente a:
// const { nombreClave, anos, coord} = funcion3(persona);
// const {lat, long} = coord
// console.log(nombreClave, anos, lat, long);