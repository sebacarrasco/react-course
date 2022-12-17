import React from 'react';
import {shallow} from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Tests for <AddCategory />', () => {

    //  Se declaran en este scope y no dentro del beforeEacah para que
    // esten accesibles desde los tests.
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>); // Se define redundantemente acá para que aparezcan las autocompletaciones

    beforeEach ( () => {
        jest.clearAllMocks(); // Para reinicializar la función (que no aparezca que fue llamada por otros tests)
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    
    test('should match the snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('should change the text of the textbox (input)', () => {
        const input = wrapper.find("input");
        const value = "new input";

        input.simulate("change", { target: { value } }); // El segundo parámetro es el evento
        
        // Queda pendiente esto (por alguna razón no se actualiza el valor del input)
    });

    test('should not post the info on submit when the input is void', () => {
        
        //  El segundo parámetro de simulate es el evento
        wrapper.find("form").simulate("submit", { preventDefault: () => {} });

        // Como no se pasó un input válido, la función setCategories no debió haber sido llamada
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and clear the input text box when the input is valid', () => {
        const input = wrapper.find("input");
        const value = "new input";

        // Se hace el cambio en el input
        input.simulate("change", { target: { value } }); // El segundo parámetro es el evento

        // Se hace el submit
        wrapper.find("form").simulate("submit", { preventDefault: () => {} });

        // Se espera que la función haya sido llamada
        expect(setCategories).toHaveBeenCalled();
        // Podría haber sido también: .toHaveBeenCalledTimes(1);

        // Además, se espera que la función haya sido llamada con una función
        // (La función que actualizará el valor de setCategories, ej: (cats) => [...cats, new_cat])
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // Se espera que el texto de la caja de texto sea ''
        const { value:inputValue } = input.props();
        expect(inputValue).toBe('');
    });
    
    
});
