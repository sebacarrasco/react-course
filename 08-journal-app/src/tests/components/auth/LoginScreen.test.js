import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}));

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
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Tests for >LoginScreen />', () => {
   
    beforeEach( () => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should dispatch the startGoogleLogin action', () => {
       
        wrapper.find(".google-btn").prop("onClick")();
        expect(startGoogleLogin).toHaveBeenCalled()
    });

    test('should dispatch the startLoginEmailPassword', () => {

        wrapper.find("form").simulate("submit", { preventDefault: ()=>{} });

        expect(startLoginEmailPassword).toHaveBeenCalledWith("seba@uc.cl", "123456");
        
    });
    
    
    

});
