import React from 'react';
import {GifGridItem} from "../../components/GifGridItem";
import {shallow} from "enzyme";

describe('Tests for <GifGridItem />', () => {
    
    const title = "A title for the GifGridItem";
    const url = "https://example_url.com";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should render the component correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should have a parragraph with the title', () => {
        const parragraphText = wrapper.find("p").text();
        
        expect(parragraphText.trim()).toBe(title);
    });
    
    test('should hace the image with src=url and alt=title', () => {
        const image = wrapper.find("img");
        const {src, alt} = image.props();

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should have animate__bounce css class', () => {
        const div = wrapper.find("div");
        const {className} = div.props();

        expect(className).toContain("animate__bounce");
        // Análogo a hacer: expect(className.includes("animate__fadeIn")).toBe(true);
    });
    
    

});