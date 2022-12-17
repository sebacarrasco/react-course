import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        // La convención dice que hay que poner el nombre del archivo con
        // dos guines bajos al principios de las clases
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route path="/auth/login" component={ LoginScreen } />

                    <Route path="/auth/register" component={ RegisterScreen } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
