import { uiReducer } from "../../reducers/uiReducer";
import { types } from "../../types/types";


const initialState = {
    modalOpen: false
};

describe('Tests for uiReducer', () => {
   
    test('should return the default state', () => {
        
        const state = uiReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('should open and close the modal', () => {
       
        const openAction = {
            type: types.uiOpenModal
        }
        const openState = uiReducer(initialState, openAction);
        expect(openState).toEqual({
            modalOpen: true
        }); 

        const closeAction = {
            type: types.uiCloseModal
        }
        const closeState = uiReducer(openState, closeAction);
        expect(closeState).toEqual({
            modalOpen: false
        }); 

    });
    
    

});
