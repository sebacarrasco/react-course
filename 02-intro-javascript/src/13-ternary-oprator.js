const activo = true;

const mensaje = ( activo ) ? "Activo": "Inactivo";
console.log(mensaje) // "Activo"

// Por otro lado, si solo queremos definir la variable en caso de que se cumpla la condición:
const mensaje2 = (activo) && "Activo"
console.log(mensaje2) // "Activo"

const mensaje3 = (!activo) && "Algún valor"
console.log(mensaje3) // False