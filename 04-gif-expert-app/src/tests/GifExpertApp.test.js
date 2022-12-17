import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';


describe('Tests for <GifExpertApp />', () => {
    
    test('should match the snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
       
        const categories = ["South park", "Star Wars"];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
    


    
});
