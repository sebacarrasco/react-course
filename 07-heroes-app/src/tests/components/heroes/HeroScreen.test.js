import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';


describe('Tests for <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
   
    test('should render the redirect component y there is no arguments in the url', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero"]}>
                <HeroScreen history={ history }/>
            </MemoryRouter>  
        );
        expect(wrapper.find("Redirect").exists()).toBe(true);

    });

    test('should show the hero if the parameter exists and its found', () => {
       
        // En este caso es necesario poner a HeroScreen en una ruta para que pueda
        // obtener los parámetros por url
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route path="/hero/:heroId" component={ HeroScreen } />
            </MemoryRouter>  
        );
        expect(wrapper.find(".row").exists()).toBe(true);

    });

    test('should return to the previous page with push', () => {
       
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route path="/hero/:heroId" component={ props => <HeroScreen history={ history }/> } />
            </MemoryRouter>  
        );

        wrapper.find("button").simulate("click");
        expect(history.push).toHaveBeenCalledWith("/");
        expect(history.goBack).not.toHaveBeenCalled();


    });

    test('should return to the previous page with goBack', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route path="/hero/:heroId" component={ props => <HeroScreen history={ history }/> } />
            </MemoryRouter>  
        );

        wrapper.find("button").simulate("click");
        expect(history.push).not.toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalled();


    });


    test('should call redirect if the hero does not exists', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider1234657484"]}>
                <Route path="/hero/:heroId" component={ props => <HeroScreen history={ history }/> } />
            </MemoryRouter>  
        );
        expect(wrapper.text()).toBe("");

    });
    
    

});
