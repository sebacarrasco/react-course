import { heroes } from "./data/heroes";

const getHeroeById = (id) => {
    return heroes.find( element => element.id === id)
}

const getHeroesByOwner = (owner) => {
    return heroes.filter( element => element.owner === owner)
}

export {getHeroeById, getHeroesByOwner}