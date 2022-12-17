import { types } from "../types/types";

/*
cuando el usuario no está autenticado -> {}

en caso contrario:
{
    uid: "asdjklasf4524", //-> id de firebase
    name: "Seba"
}
*/

export const authReducer = ( state = {}, action ) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        
        case types.logout:
            return { };
    
        default:
            return state;
    }
}