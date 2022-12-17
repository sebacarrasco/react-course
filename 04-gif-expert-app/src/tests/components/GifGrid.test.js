import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Vamos a simular que el custom hook useFetchGifs retornó
// Cone esto se simulará cualquier llamada a ese archivo y
// suponer o controlar la info que esto va a responder
jest.mock('../../hooks/useFetchGifs');

describe('Tests for <GifGrid />', () => {

    const category = "South Park";
    
    test('should match to initial snapshot', () => {

        // Vamos a fingir que el custom hook retorna esto
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);

        expect(wrapper).toMatchSnapshot();

    });

    test('should show items when the images are loaded', () => {

        const gifs = [
            {
                id: 1,
                url: "https://example.com",
                title: "A title"
            }
        ];
        
        // Vamos a fingir que el custom hook retorna esto
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false); // No debería existir el párrafo de loading
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);


    });
    
    
});