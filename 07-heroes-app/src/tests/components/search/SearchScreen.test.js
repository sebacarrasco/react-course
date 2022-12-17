import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Tests for <SearchScreen />', () => {
    
    const history = {
        push: jest.fn()
    }


    test('should show correctly with default values', () => {
       
        const wrapper = mount(
            // Como se trabaja con rutas en este componente, es necesario
            // ponerlo dentro de un router y en una ruta
            <MemoryRouter initialEntries={["/search"]}>
                <Route path="/search" component={ props => <SearchScreen history={ history }/> }/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".alert-info").text().trim()).toBe("Search a hero");

    });

    test('should show Batman and the input with the value of the queryString', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <Route path="/search" component={ props => <SearchScreen history={ history }/> }/>
            </MemoryRouter>
        );

        expect(wrapper.find("input").prop("value")).toBe("batman");
        expect(wrapper).toMatchSnapshot();

        
    });

    test('should show an error if a hero is not found', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <Route path="/search" component={ props => <SearchScreen history={ history }/> }/>
            </MemoryRouter>
        );

        expect(wrapper.find(".alert-danger").text().trim()).toBe(`There is no hero with batman123`);
        expect(wrapper).toMatchSnapshot();
        
    });

    test('should call history.push', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <Route path="/search" component={ props => <SearchScreen history={ history }/> }/>
            </MemoryRouter>
        );

        wrapper.find("input").simulate("change", {
            target: {
                name: "searchText",
                value: "bat"
            }
        });

        wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
        
        expect(history.push).toHaveBeenCalledWith("?q=bat");
    });
    
    


});

