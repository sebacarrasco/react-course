// Promesas son ásincronas
// Primero se ejecuta todo lo síncrono (secuencial)
// Después de todo lo síncrono ejecuta las promesas

import { getHeroeById, getHeroesByOwner } from "./exports-para-09"

const promesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeById(2)
        resolve(heroe) // Se llama cuando fue exitoso, para pasar al then
        // Y lo que se le pase entre argumentos se le pasará al then
    }, 2000)
    // reject("No se encontró el héroe")
})

promesa.then( (heroe) => {
    console.log("then de la promesa")
    console.log(heroe)
})
.catch ( error => console.warn(error)
)

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id)
            if (heroe)
            {
                resolve(heroe)
            }
            else
            {
                reject("No se encontró el héroe")
            }
        }, 2000)
    })
}

getHeroesByIdAsync(-1)
    .then( (heroe) => console.log(heroe))
    .catch( (error) => console.warn(error))

// Lo anterior es equivalente a hacer:
getHeroesByIdAsync(-1)
    .then( console.log)
    .catch( console.warn)