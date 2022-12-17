import React from 'react';
import { shallow } from "enzyme";
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock("../../../hooks/useFetch");
jest.mock('../../../hooks/useCounter');

describe('Tests for mulitple custom hooks', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({state: 1, increment: () => {}});
    });
    
    test('should match the snapshot with default values', () => {

        // Es necesario mockear esto porque se usa dentro
        // de <MultipleCustomHooks />
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show the info returned by the api', () => {
       
        // Vamos a hacer como si ya tuvieramos la información
        useFetch.mockReturnValue({
            data: [{
                author: "Jesse",
                quote: "Mr white"
            }],
            loading: false,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);
        
        // El elemento con clase alerta es el que dice "loading",
        // por lo que no debe aparecer cuando llega la respuesta de la api
        expect(wrapper.find(".alert").exists()).toBe(false);
        expect(wrapper.find("#quote-parragraph").exists()).toBe(true);
        expect(wrapper.find(".blockquote-footer").exists()).toBe(true);

    });
    

});
