import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('Tests for authReducer', () => {

    const state = {
        logged: false
    };
   
    test('should return the default state', () => {
        
        const newState = authReducer(state, {});
        expect(newState).toBe(state);

    });
    
    test('should authenticate and put the name of the user', () => {
        
        const newState = authReducer(state, {
            type: types.login,
            payload: {
                name: "Sebastián"
            }
        });

        expect(newState).toEqual({
            name: "Sebastián",
            logged: true
        });

    });

    test('should delete de user name and set logged in false', () => {
        
        const loggedState = {
            name: "Sebastián",
            logged: true
        }

        const newState = authReducer(loggedState, {
            type: types.logout
        });

        expect(newState).toEqual({
            logged: false
        });

    });
    
});
