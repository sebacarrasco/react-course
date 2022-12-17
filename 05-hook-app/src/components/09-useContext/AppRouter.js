import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <div className="container">
                    <Switch>

                        {/* El exact es para que sea exactamente ese path */}
                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />

                        {/* Nótese que no se le pone path, es decir, si se pone una ruta
                        que no calza con ninguna de las anteriores, entonces se mandará a la homescreen */}
                        {/* <Route component={ HomeScreen } /> */}

                        {/* Lo de arriba es equivalente a hacer: */}
                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
