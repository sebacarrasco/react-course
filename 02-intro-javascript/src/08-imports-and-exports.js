import { heroes } from "./data/heroes";
// Ver data/heroes.js también


console.log(heroes)

// Ojo que el find solo regresa un elemento
// La función que uno le pasa al find se llama callback (ni idea por qué)
const getHeroeById = (id) => {
    return heroes.find( element => element.id === id)
}
console.log(getHeroeById(1))

// Filter retorna más de uno
const getHeroesByOwner = (owner) => {
    return heroes.filter( element => element.owner === owner)
}
console.log(getHeroesByOwner("DC"))