import { getSaludo } from "../../base-tests/02-template-string"

describe('Pruebas en template-strings', () => {

    test('getSaludo should return Hola Sebastián', () => {
        const name = "Sebastián";

        const saludo = getSaludo(name);

        expect( saludo ).toBe("Hola " + name);
    });

    test('getSaludo should return Hola Carlos when no parameters are given', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe("Hola Carlos");
    });
    
});
