import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";


describe('Tests for custom hook useFetchGifs', () => {
   
    test('should return initial state', async() => {
        // renderHook crea un componente virtual donde se podrá probar el hook,
        // ya que un hook no se puede usar fuera de un componente.
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("South park"));
        const { data, loading } = result.current;

        expect(data.length).toBe(0);
        expect(loading).toBe(true);

        // Es importante que se espere a que cambie el estado (por la request),
        // porque si no, se termina el test, se desmonta el hook y luego igual
        // se cambia el estado, pero en un hook que no está en un componente por
        // lo que tirará error
        await waitForNextUpdate();

    });

    test('should return an array of images and loading equal to false', async() => {
        
        // waitForNextUpdate -> retorna una promesa que indica cuando sucedió
        // un cambio en el estado del custom hook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("South park"));

        await waitForNextUpdate();
        // Es importante que la data y el loading se extraigan después de la actualización
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
    
    
});
