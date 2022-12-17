import { firebase } from '../firebase/firebase-config';
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    // Chequeando el estado de firebase
    const [checking, setChecking] = useState(true);

    const [isLogged, setIsLogged] = useState(false);

    // Este useEffect hace que no se elimine el estado de loggeado al
    // recargar la página. Esto es debido a que cuando se refresque la página
    // el onAuthStateChanged se ejecuta (haciendo que nos subscribamos -> estamos añadiendonos como observadores),
    // entonces en caso de que el usuario haya estado loggeado, este se recupera y
    // podemos actualizar la store (Creo que firebase guarda al usuario en indexDb (ver en devtools) y por eso no se pierde
    // al recargar).
    // Estamos diciendo que esto se ejecute justo después de que se cargue la página.
    useEffect(() => {
        // Esto se realiza de maner asíncrona, por eso usamos el checking
        firebase.auth().onAuthStateChanged( async(user) => {
            // Esta función se ejecutará cada vez que cambie la autenticación del usuario
            // y cuando se recarga la página
            // Estamos subscribiendo esta función a los cambios dela auth (observable)

            // Si no está autenticado, user será null
            // Si existe el uid, el user está autenticado
            if (user?.uid)
            {  
                // Si hay user guardado en indexDb, entonces lo loggeamos
                dispatch(login(user.uid, user.displayName));
                setIsLogged(true);

                dispatch(startLoadingNotes(user.uid));
            }
            else
            {
                setIsLogged(false);
            }
            setChecking(false);
    
        });
    }, [ dispatch, setChecking, setIsLogged ])
    // Esto solo se ejecutará una vez porque ni dispatch ni el setChecking cambiarán


    // mientras se está chequeando si el user sigue loggeado, se muestra esto.
    if (checking)
    {
        return (
            <h1 style={ {textAlign:"center"} }>
                Loading...
            </h1>
        )
    }


    // Cuando el checking cambia a false y ya sabemos si tenemos un usuario loggeado o no,
    // entonces retornamos el router
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={ AuthRouter } isLogged={ isLogged }/>

                    <PrivateRoute exact path="/" component={ JournalScreen } isLogged={ isLogged }/>

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
