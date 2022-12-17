import { getHeroeByIdAsync } from "../../base-tests/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en promesas', () => {

    // Se pone el done para avisar que recién ahí se terminó de ejecutar el test
    test('should return a heroe async', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('should get an error if the heroe doesn`t exists', ( done ) => {
        const id = -1;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe("No se pudo encontrar el héroe");
                done();
            });
    });
    
});