import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import React from 'react';

describe('Pruebas para <CounterApp />', () => {

    // Se declara wrapper con let para que se accesible desde todos los tests
    // y se pueda ir modificando
    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        // Esto se ejecuta antes de cada test (se reinicializa el wrapper)
        wrapper = shallow(<CounterApp />);
    });

    test('Debe coincidir con el snapshot con el valor por defecto', () => { 

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar el valor enviado mediante props', () => {
        const value = 123;
        const wrapper = shallow(<CounterApp value={value}/>);

        const renderedValue = wrapper.find("h2").text();

        expect(renderedValue).toBe(value.toString());
    });

    test('Debe incrementar con el botón +1', () => {

        wrapper.find("button").at(0).simulate("click");

        const renderedValue = wrapper.find("h2").text();

        // Como el valor por defecto es 10, se espera que ahora sea 11
        expect(renderedValue).toBe("11");

    });

    test('Debe disminuir con el botón -1', () => {

        // Se podría poner cconst wrapper = shallow(<CounterApp />);
        // pero estaríamos repitiendo código :c Para eso está el beforeEach c:

        wrapper.find("button").at(2).simulate("click");

        const renderedValue = wrapper.find("h2").text();

        // Como el valor por defecto es 10, se espera que ahora sea 9
        expect(renderedValue).toBe("9");

    });
    
    test('Debe resetarse correctamente', () => {
        const value = 123;
        const wrapper = shallow(<CounterApp value={value}/>);

        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");

        const renderedValue = wrapper.find("h2").text();

        expect(renderedValue).toBe(value.toString());
    });
    
});