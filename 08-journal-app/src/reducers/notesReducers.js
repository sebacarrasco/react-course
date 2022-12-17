

/*
El state será de la siguiente forma:
{
    notes: [],
    active: {
        id: 'asdasf12313',
        title: '',
        body: '',
        imageUrl: '',
        date: 123456798465
    }
}
notes es el arreglo de objetos de notas (venidos de firebase)
actice es el objeto de la nota activa o null
*/

import { types } from "../types/types";

const InitialState = {
    notes: [],
    active: null
}

export const notesReducer = (state=InitialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }
        
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdated:
            // No hace falta actualizar la active note porque esta siempre
            // está al día con lo que el usuario modifica
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                    ? action.payload.note
                    : note
                )
            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }
    
        default:
            return state;
    }

}