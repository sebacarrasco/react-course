import $ from 'jquery';
// Para usar jquery en un proyecto de react hay que hacer yarn add jquery
const apiKey = "CQ7Ca1jFMZ2nFV55CriEsPMG28IAklq7";

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// request.then(response => response.json().then(data => console.log(data.data)))
//     .catch(console.warn)
// Eso feo se puede hacer más bonito encadenando las promesas (porque resp.json() es una promesa también)
request.then(response => response.json())
    .then( ({ data }) => {
        const { url } = data.images.original
        console.log(url)
        $("#root").append(`<img src=${url}>`)
    })
    .catch(console.warn)