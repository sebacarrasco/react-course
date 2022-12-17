import { types } from "../types/types";


const initState = {
    checking: true,
    // uid: null, // Estos dos estarán en el estado cuando ya se haya chequeado
    // name: null
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
                // uid: state.payload.uid,
                // name: state.payload.name
            }
        
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                checking: false
            }
        
        default:
            return state;
    }

}