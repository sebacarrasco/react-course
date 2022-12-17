import { retornaArreglo } from "../../base-tests/07-deses-arr";

describe('Pruebas en desestructuración de arreglos', () => {
    
    test('retornaArreglo should return a string and a number', () => {
        const [letras, numero] = retornaArreglo();

        expect(letras).toBe("ABC")
        expect(typeof letras).toBe("string")

        expect(numero).toBe(123)
        expect(typeof numero).toBe("number")

    })
    

})
