import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import Swal from 'sweetalert2';


jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn(),
    startRegister: jest.fn()
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

// Config de la store
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <LoginScreen />
    </Provider>
);


describe('Tests for <LoginScreen />', () => {

    beforeEach( () => {
        jest.clearAllMocks();
    });
   
    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should dispatch the startLogin action', () => {
       
        wrapper.find("input[name='loginEmail']").simulate('change', {
            target: {
                name: 'loginEmail',
                value: 'test@testing.com'
            }
        });

        wrapper.find("input[name='loginPassword']").simulate('change', {
            target: {
                name: 'loginPassword',
                value: '123456'
            }
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault: () => {}
        });

        expect(startLogin).toHaveBeenCalledWith('test@testing.com', '123456');

    });

    test('should not dispatch the startRegister action if passwords do not match', () => {
        
        wrapper.find("input[name='registerPassword1']").simulate('change', {
            target: {
                name: 'registerPassword1',
                value: '123456'
            }
        });

        wrapper.find("input[name='registerPassword2']").simulate('change', {
            target: {
                name: 'registerPasswor2',
                value: '999999'
            }
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault: () => {}
        });

        expect(startRegister).not.toHaveBeenCalled();
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'Las contraseñas deben ser iguales', 'error');

    });
    
    test('should dispatch the startRegister action if passwords match', () => {
       
        wrapper.find("input[name='registerPassword1']").simulate('change', {
            target: {
                name: 'registerPassword1',
                value: '123456'
            }
        });

        wrapper.find("input[name='registerPassword2']").simulate('change', {
            target: {
                name: 'registerPassword2',
                value: '123456'
            }
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault: () => {}
        });

        expect(startRegister).toHaveBeenCalledWith('', '123456', '');
        expect(Swal.fire).not.toHaveBeenCalled();

    });
    
    

});
