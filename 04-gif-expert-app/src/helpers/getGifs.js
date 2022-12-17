export const getGifs = async(category) => {
    const limit = 10;
    const api_key = "CQ7Ca1jFMZ2nFV55CriEsPMG28IAklq7";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
}