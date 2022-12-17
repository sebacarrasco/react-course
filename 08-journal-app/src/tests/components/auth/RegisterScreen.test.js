import React from 'react';
import { mount } from 'enzyme';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

// Config de la store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui:{
        msgErrorLogin: null,
        msgErrorRegister: null,
        loading: false
    }
};
let store = mockStore(initState);
// store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);

describe('Tests for <RegisterScreen />', () => {
   
    // Por alguna razón con esto no funcionaba la segunda prueba
    // afterEach( () => {
    //     store = mockStore(initState);
    //     jest.clearAllMocks();
    // });

    test('should match the snapshot', () => {
       
        expect(wrapper).toMatchSnapshot();

    });

    test('should dispatch the respective action', () => {
       
        const emailField = wrapper.find('input[name="email"]');
        // Se simula que el input de mail está vacío
        emailField.simulate("change", {
            target: {
                name: "email",
                value: ""
            }
        });

        wrapper.find("form").simulate("submit", { preventDefault: ()=>{} });
        const [ action ] = store.getActions();
        expect(action).toEqual({
            type: types.uiSetRegisterError,
            payload: "Email is not valid"
        });
    });

    test('should show the alert box with the error', () => {
        const initState = {
            auth: {},
            ui:{
                msgErrorLogin: null,
                msgErrorRegister: "Email is not valid",
                loading: false
            }
        };
        const store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find(".auth__alert-error").exists()).toBe(true);
        expect(wrapper.find(".auth__alert-error").text().trim()).toBe(initState.ui.msgErrorRegister);
    });
    
    
    
    

});
