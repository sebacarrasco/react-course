import { types } from "../types/types";


export const setRegisterError = (error) => ({
    type: types.uiSetRegisterError,
    payload: error
});

export const removeRegisterError = () => ({
    type: types.uiRemoveRegisterError
});


export const setLoginError = (error) => ({
    type: types.uiSetLoginError,
    payload: error
});

export const removeLoginError = () => ({
    type: types.uiRemoveLoginError
});


export const StartLoading = () =>({
    type: types.uiStartLoading
});

export const FinishLoading = () =>({
    type: types.uiFinishLoading
});