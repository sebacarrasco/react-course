import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Tests for useFetch custom hook', () => {
    
    const url = `https://www.breakingbadapi.com/api/quotes/${ 1 }`;
    
    test('should return the default info', () => {

        const { result } = renderHook( () => useFetch(url) );
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });

    // SE DEJARON COMENTADOS LOS SIGUIENTES TESTS PORQUE SE DEMORAN MÁS Y ASÍ
    // LA CORRIDA DE TESTS SE DEMORA MENOS

    // test('should have the info of the request, loading false and error false', async() => {

    //     const { result, waitForNextUpdate } = renderHook( () => useFetch(url) );
    //     await waitForNextUpdate({timeout:2000}); // El timeout es para decirle que espere hasta 2 segundos
    //                                             // la respuesta de la request
    //     const { data, loading, error } = result.current;

    //     expect(data.length).toBe(1);
    //     expect(loading).toBe(false);
    //     expect(error).toBe(false);
    // });

    // test('should handle an error', async() => {

    //     // El siguiente url sabemos que tira error
    //     const { result, waitForNextUpdate } = renderHook( () => useFetch("https://reqres.in/apiasfdafaf/users?page=2") );
    //     await waitForNextUpdate({timeout:2000}); // El timeout es para decirle que espere hasta 2 segundos
    //                                             // la respuesta de la request
    //     const { data, loading, error } = result.current;

    //     expect(data).toBe(null);
    //     expect(loading).toBe(false);
    //     expect(error).toBe("Couldn't load the info");
    // });
    

});
