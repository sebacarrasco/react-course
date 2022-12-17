import { getGifs } from "../../helpers/getGifs";

describe('Tests with getGifs helper', () => {
    
    test('should return 10 elements when a valid category is passed', async() => {
        const category = "south park";
        const gifs = await getGifs(category);

        expect(gifs.length).toBe(10);
    });

    test('should return 0 elements when no category is passed', async() => {
        const category = "";
        const gifs = await getGifs(category);

        expect(gifs.length).toBe(0);
    });
    
});
