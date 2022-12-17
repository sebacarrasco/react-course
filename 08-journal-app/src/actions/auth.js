import Swal from 'sweetalert2';
import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { FinishLoading, StartLoading } from "./ui";
import { notesLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
    // Cuando una acción retorna un callback (una función)
    // el midleware la ejecutará. Además pasa como parámetro
    // el dispatch gracias a thunk
    return (dispatch) => {

        dispatch(StartLoading());

        // El return es solo para que en testing aparezcan las acciones login y finishLoading como
        // despachadas
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(FinishLoading());
            })
            .catch(error => {
                dispatch(FinishLoading());
                Swal.fire('Error', error.message, 'error');
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        
        dispatch(StartLoading());

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({ user }) => {
                await user.updateProfile({displayName: name}); // Hay que establecerle el displayName a diferencia
                                                            // de cuando se hace la autenticación con google (se actualiza en db y el objeto)
                dispatch(login(user.uid, user.displayName));
                dispatch(FinishLoading());
            })
            .catch(error => {
                dispatch(FinishLoading());
                Swal.fire('Error', error.message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    // Como es una tarea asíncrona, se tiene que retornar una función.
    // Nótese que estas acciones son despachadas también.
    // Al ser despachadas y no retornar un objeto sino que una función,
    // entonces se ejecuta la función retornada y se pueden hacer dispatch dentro
    // de la misma función
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( userCred => {
                dispatch(login(userCred.user.uid, userCred.user.displayName))
            })
    }
    // El displayName lo tendremos siempre que se autentica con una red social, github o algo así
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startlogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut(); //Solo puede fallar por conexión a internet
        dispatch(logout());
        dispatch(notesLogout());
    }
}

export const logout = () => ({
    type: types.logout
});