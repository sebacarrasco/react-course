import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Tests for useCounter custom hook', () => {
    
    test('should return the default values', () => {

        // renderHook crea un componente virtual donde se podrá probar el hook,
        // ya que un hook no se puede usar fuera de un componente.
        const { result } = renderHook( () => useCounter());

        const { state:counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(typeof increment).toBe("function");
        expect(typeof decrement).toBe("function");
        expect(typeof reset).toBe("function");

    });

    test('should have the counter on 100', () => {

        const { result } = renderHook( () => useCounter(100));

        const { state:counter } = result.current;

        expect(counter).toBe(100);

    });

    test('should increment the counter in 1', () => {

        const { result } = renderHook( () => useCounter());

        const { increment, state:counter} = result.current;
        const newValue = counter + 1

        // Act es para ejecutar funciones relacionadas a los hooks
        act( () => increment());

        expect(result.current.state).toBe(newValue);

    });

    test('should decrement the counter in 1', () => {

        const { result } = renderHook( () => useCounter());

        const { decrement, state:counter} = result.current;
        const newValue = counter - 1

        // Act es para ejecutar funciones relacionadas a los hooks
        act( () => decrement());

        expect(result.current.state).toBe(newValue);

    });
    
    test('should reset the counter', () => {
        const initialValue = 100;
        const { result } = renderHook( () => useCounter(initialValue));

        const { reset, decrement } = result.current;

        // Act es para ejecutar funciones relacionadas a los hooks
        act( () => { 
            decrement();
            reset();
        });

        expect(result.current.state).toBe(initialValue);

    });
});
