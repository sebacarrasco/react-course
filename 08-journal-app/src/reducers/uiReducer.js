import { types } from "../types/types";


const initialState = {
    loading: false,
    msgErrorRegister: null,
    msgErrorLogin: null
}

// Reducer para manejar errores en el registro con mail
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetRegisterError:
            return {
                ...state,
                msgErrorRegister: action.payload
            }
        
        case types.uiRemoveRegisterError:
            return {
                ...state,
                msgErrorRegister: null
            }

        case types.uiSetLoginError:
                return {
                    ...state,
                    msgErrorLogin: action.payload
                }
            
        case types.uiRemoveLoginError:
                return {
                    ...state,
                    msgErrorLogin: null
                }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
    
        default:
            return state;
    }
}