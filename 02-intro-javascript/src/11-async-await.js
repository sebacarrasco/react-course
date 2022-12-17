import $ from 'jquery';

// Los await solo se pueden utilizar dentro de una función async
// const getImage = async() => {
//     const apiKey = "CQ7Ca1jFMZ2nFV55CriEsPMG28IAklq7";
//     const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//     const { data }  = await response.json();
//     const { url } = data.images.original;
//     $("#root").append(`<img src=${url}>`);
// }

// Para manejar errores con await: try y catch
const getImage = async() => {
    try {
        const apiKey = "CQ7Ca1jFMZ2nFV55CriEsPMG28IAklq7";
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data }  = await response.json();
        const { url } = data.images.original;
        $("#root").append(`<img src=${url}>`);
    } catch (error) {
        console.warn(error)
    }
}

getImage();