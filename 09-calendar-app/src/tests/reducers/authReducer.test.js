import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


const initialState = {
    checking: true
}

describe('Tests for authReducer', () => {
   
    test('should return the default value', () => {
        
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('should authenticate the user', () => {
       
        const state = authReducer(initialState, {
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'test'
            }
        });

        expect(state).toEqual({
            checking: false,
            uid: '123',
            name: 'test'
        });

    });
    
    

});
