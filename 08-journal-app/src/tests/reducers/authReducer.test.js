import { authReducer } from "../../reducers/authReducers";
import { types } from "../../types/types";



describe('Tests for authReducer', () => {

    const uid = "123";
    const name = "Seba";
    const user = {
        uid,
        name
    }
   
    test('should return the default state', () => {
        
        const state = authReducer({}, {
            type: "123"
        });

        expect(state).toEqual({});
        
    });

    test('should return the logged state', () => {
       
        const state = authReducer({}, {
            type: types.login,
            payload: { 
                uid,
                displayName: name
            }
        })

        expect(state).toEqual(user);

    });

    test('should return the logged out state', () => {
       
        const state = authReducer(user, {
            type: types.logout
        });

        expect(state).toEqual({});

    });
    
    
    

});
