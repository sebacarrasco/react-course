import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppRouter } from '../../router/AppRouter';

// Config de la store
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

// En este caso no es necesario envolver en <MemoryRouter></MemoryRouter>
// porque el componente no tiene <Link />'s

describe('Tests for <AppRouter />', () => {
    
    test('should match the snapshot', () => {

        const initState = {
            auth: {
                checking: true
            }
        };
        const store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h5').exists()).toBe(true);
        
    });

    test('should show the public route', () => {

        const initState = {
            auth: {
                checking: false,
                uid: null
            }
        };
        const store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.login-container').exists()).toBe(true);
        
    });

    test('should show the private route', () => {

        const initState = {
            auth: {
                checking: false,
                uid: '123',
                name: 'test'
            },
            calendar: {
                events: [],
                activeEvent: null
            },
            ui: {
                modalOpen: false
            }
        };
        const store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );

        // Sin snapshot porque al pasar de mes, el calendario se va a ver diferente
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.calendar-screen').exists()).toBe(true);
        
    });
    

});
