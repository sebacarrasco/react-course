import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startlogout } from "../../actions/auth";
import { types } from "../../types/types";

// Config de la store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// El objeto que recibe mockStore es el estado actual de la store
const uid = "TESTING";
const name = "Seba";
const email = "test@testing.com";
const password = "123465";
const initState = {};
let store = mockStore(initState);

describe('Tests for auth actions', () => {

    beforeEach( () => {
        store = mockStore(initState);
    });

    test('login and logout should crceate the respective action', () => {
       
        const loginAction = login(uid, name);
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName: name
            }
        });

        const logoutAction = logout();
        expect(logoutAction).toEqual({
            type: types.logout
        });

    });

    test('startLogout should make the logout', async() => {
       
        await store.dispatch(startlogout());

        const [ logoutActionDispatched, notesLogoutAction ] = store.getActions();
        expect(logoutActionDispatched).toEqual({
            type: types.logout
        });

        expect(notesLogoutAction).toEqual({
            type: types.notesLogoutCleaning
        });

    });
    
    test('should initiate the startLoginEmailPassword', async() => {
       
        await store.dispatch(startLoginEmailPassword(email, password));
        const [ 
            startLoadingAction,
            loginActionDispatched,
            finishLoadingAction
        ] = store.getActions();

        // Ojo que el uid es real sacado de firestore
        expect(loginActionDispatched).toEqual({
            type: types.login,
            payload: {
                uid: "bMLUhZM7wpOK1jtxWz4LcoRzaEZ2",
                displayName: null
            }
        });

    });
    
    

});
