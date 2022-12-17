import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
import { startChecking, startLogin, startRegister } from '../../actions/auth';
import * as fetchModule from '../../helpers/fetch';
import { types } from '../../types/types';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

// Config de la store
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();


describe('Tests for auth actions', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });
   
    test('correct startLogin', async() => {
        
        await store.dispatch(startLogin('test@testing.com', '123456'));

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: expect.any(String)
            }
        });

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));

    });

    test('incorrect startLogin', async() => {
       
        await store.dispatch(startLogin('test@testing.com', '555555'));

        let actions = store.getActions();
        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'Contraseña incorrecta', 'error');


        await store.dispatch(startLogin('testttttt@testing.com', '123456'));

        actions = store.getActions();
        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'Ese correo no está asociado a ningún usuario', 'error');

    });

    test('correct startRegister', async() => {
       
        // Mockeamos el fetch withtoken para no crear al usuario realmente,
        // ya que si lo creamos, la siguiente vez que se corra la prueba
        // el mail estará usado.
        fetchModule.fetchWithoutToken = jest.fn( () => ({
            json() {
                return {
                    ok: true,
                    uid: '123',
                    name: 'test',
                    token: 'kashflahs5f4d5f4654dfasd'
                }
            }
        }));

        await store.dispatch(startRegister('test2@testing.com', '123456', 'test'));
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'test'
            }
        });

        expect(localStorage.setItem).toHaveBeenCalledWith('token', 'kashflahs5f4d5f4654dfasd');
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));

    });

    test('correct startChecking', async() => {

        // Se mockea porque el startChecking necesita el token, pero no tenemos token
        // en el localStorage porque setItem está mockeado
        fetchModule.fetchWithToken = jest.fn( () => ({
            json() {
                return {
                    ok: true,
                    uid: '123',
                    name: 'test',
                    token: 'kashflahs5f4d5f4654dfasd'
                }
            }
        }));
        
        await store.dispatch(startChecking());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'test'
            }
        });

        expect(localStorage.setItem).toHaveBeenCalledWith('token', 'kashflahs5f4d5f4654dfasd');
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));
    });
    
    
    

});
