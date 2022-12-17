import { getHeroeById, getHeroesByOwner } from "../../base-tests/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de héroes', () => {
    
    test('should return a heroe by id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('should return undefined', () => {
        const id = -1;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('should return DC heroes', () => {
        const owner = "DC";
        const dcHeroes = getHeroesByOwner(owner);

        const dcHeroesFilter = heroes.filter( (heroe) => heroe.owner === owner )

        expect(dcHeroes).toEqual(dcHeroesFilter);
    });

    test('should return an array of lenght equal to the number of marvel heroes', () => {
        const owner = "Marvel";
        const marvelHeroes = getHeroesByOwner(owner);
        const marvelHeroesCount = 2;

        expect(marvelHeroes.length).toBe(marvelHeroesCount);
    });
    
})
