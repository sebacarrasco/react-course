import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import { shallow } from "enzyme";

describe('Pruebas en <PrimeraApp /> con las herramientas de testeo que viene por defecto (@testing-library/jest-dom/extend-expect)',
    () => {
    test('Debe mostrar el mensaje Hola hola', () => {
        const saludo = "Hola hola";
        const wrapper = render( <PrimeraApp saludo={ saludo } /> );
        const {getByText} = wrapper; // Recordar que esto es lo mismo que hacer getByText=wrapper.getByText
        // Y las dos líneas anteriores es lo mismo que hacer lo de la siguiente línea:
        // const {getByText} = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo + " locos")).toBeInTheDocument();
    });
    
});


describe('Pruebas en <PrimeraApp /> con las herramientas de testeo de Enzyme', () => {
    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = "Hola hola";

        // shallow es como render pero permite otras cosas como simular clicks
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        // Para debuggear: console.log(wrapper.html())

        // La siguiente línea va a fallar siempre la primera vez, ya que el snapshot que está
        // guardado al principio es vacío. Por eso hay que apretar `u` en la consola para
        // updatear el snapshot con el wrapper actual. (esto se puede hacer gracias a enzyme-to -json)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el subtítulo enviado mediante props', () => {
        const saludo = "Hola hola";
        const parrafo ="Wena soy un parrafo";
        const wrapper = shallow(<PrimeraApp saludo={ saludo } parrafo={parrafo}/>);

        // Obtenemos el texto del primer párrafo
        const textoParrafo = wrapper.find('p').first().text(); // selector como jquery

        expect(textoParrafo).toBe(parrafo);
    });
    
    
});