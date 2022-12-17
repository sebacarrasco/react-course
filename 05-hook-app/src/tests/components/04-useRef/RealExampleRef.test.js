import React from 'react';
import { shallow } from "enzyme";

import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Tests for <RealExampleRef />', () => {
   
    const wrapper = shallow(<RealExampleRef />);

    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);

    });


    test('should show the <MultipleCustomHooks /> component', () => {

        wrapper.find("button").simulate("click");

        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);

    });
    

});
