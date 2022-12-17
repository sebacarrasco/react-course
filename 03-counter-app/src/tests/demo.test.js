

describe('Pruebas en el archivo demo.test.js', () => {

    test('Deben de ser iguales los strings', () => {
        // Inicialización / Arrange
        const mensaje = "Wenaa"
    
        // Estímulo / Act
        const mensaje2 = "Wenaa"
    
        // Observar el comportamiento / assert
        expect(mensaje).toBe(mensaje2); // ===
    })  

})
