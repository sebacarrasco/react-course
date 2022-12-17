import {
    FinishLoading,
    removeLoginError,
    removeRegisterError,
    setLoginError,
    setRegisterError,
    StartLoading
 } from "../../actions/ui";
import { types } from "../../types/types";


describe('Tests for ui actions', () => {
   
    test('Ever sinc action should work', () => {
       
        let action = setRegisterError("error");
        expect(action).toEqual({
            type: types.uiSetRegisterError,
            payload: "error"
        });

        action = setLoginError("error");
        expect(action).toEqual({
            type: types.uiSetLoginError,
            payload: "error"
        });

        action = removeRegisterError();
        expect(action).toEqual({
            type: types.uiRemoveRegisterError
        })

        action = removeLoginError();
        expect(action).toEqual({
            type: types.uiRemoveLoginError
        })

        action = StartLoading();
        expect(action).toEqual({
            type: types.uiStartLoading
        });

        action = FinishLoading();
        expect(action).toEqual({
            type: types.uiFinishLoading
        })

    });
    

});
