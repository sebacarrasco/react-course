import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Tests for useForm coustom hook', () => {

    const initialName = "Sebastián";
    const newName = "Sebastián Carrasco";
    const initialForm = {
        name: initialName,
        email: "seba@uc.cl"
    };

    test('should return a default form', () => {

        const { result } = renderHook( () => useForm() );
        const [ values, handleInputChange, reset ] = result.current;

        expect(values).toEqual({});
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");

    });

    test('should return a form with iniital values', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");

    });
    
    test('should change the value of the form', () => {
    
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        act( () => handleInputChange({
            target: {
                name: "name",
                value: newName
            }
        }));
        const [ values ] = result.current;

        // expect(values.name).toEqual(newName);
        expect(values).toEqual({...initialForm, name: newName})

    });

    test('should reset the form', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;
        act( () => {
                handleInputChange({
                    target: {
                        name: "name",
                        value: newName
                    }
                });
                reset();
        });
        const [ values ] = result.current;

        expect(values).toEqual(initialForm);

    });
    
    

});
