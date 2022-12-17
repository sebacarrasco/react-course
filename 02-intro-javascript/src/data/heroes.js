export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Se podría quitar el export de arriba y hacer:
// export default heroes; (acá no se desestructuran las imports)

// O también
// export {
//     heroes
// } Acá sí se desestructuran los imports

// O también
// export {
//     heroes as default
// } Acá no se desestructuran los imports