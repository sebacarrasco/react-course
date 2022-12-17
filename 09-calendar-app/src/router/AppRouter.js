import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    // Con esto el appRoutter está pendiente a los cambios de checking y uid (para login y logout)
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        // Cada vez que se renderea el componente revisamos si hay token válido
        // y en caso de que lo haya, se renueva
        dispatch(startChecking());
    }, [dispatch]);

    if (checking)
    {
        return <h5>Espere...</h5>;
    }

    const isLogged = !!uid; //!!null === false y !!"asfjlkjfs" === true

    return (
        <Router>
            <div>

                <Switch>
                    <PublicRoute exact path="/login" component={ LoginScreen } isLogged={ isLogged }/>
                    <PrivateRoute exact path="/" component={ CalendarScreen } isLogged={ isLogged }/>
                    <Redirect to="/" />
                </Switch>
                
            </div>
        </Router>
    )
}
