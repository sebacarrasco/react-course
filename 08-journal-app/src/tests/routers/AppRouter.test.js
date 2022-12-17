import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../routers/AppRouter';
import { login } from '../../actions/auth';
import { act } from '@testing-library/react';
import { firebase } from '../../firebase/firebase-config';

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
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
    },
    notes: {
        notes: [],
        active: null
    }
};
let store = mockStore(initState);
store.dispatch = jest.fn();


describe('Tets for <AppRouter />', () => {
   
    test('should call the login if authenticated', async() => {
       

        await act( async() => {
            const userCred = await firebase.auth().signInWithEmailAndPassword("test@testing.com", "123465");

            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(login).toHaveBeenCalledWith("bMLUhZM7wpOK1jtxWz4LcoRzaEZ2", null);

    });
    

});
