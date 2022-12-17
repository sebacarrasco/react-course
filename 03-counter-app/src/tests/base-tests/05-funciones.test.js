import { getUser, getUsuarioActivo } from "../../base-tests/05-funciones";

describe('Pruebas en funciones', () => {

    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        // Se usa el toEqual porque {}==={} es false ya que
        // apuntan a distintas direcciones de memoria
        expect( user ).toEqual(userTest);
    });

    test('getUsuarioActivo should return an object', () => {
        const name = "Sebastián";
        const userTest = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);

        expect(user).toEqual(userTest);
    });
    
    
});
