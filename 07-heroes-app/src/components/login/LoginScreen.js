import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    
    const handleLogin = () => {
        // Con el push se añade al historial la siguiente ruta y
        // se puede volver a la página anterior con el botón de atrás (<-).
        // Con el replace se reemplaza, no podrá volver a la página
        // anterior con el botón de atrás (<-).
        // history.push("/");
        // history.replace("/");
        const action = {
            type: types.login,
            payload: {
                name: "Sebastián"
            }
        };
        dispatch(action);

        // Esto es para ir al último path que el usuario visitó
        const lastPath = localStorage.getItem("lastPath") || "/";
        history.replace( lastPath );
    };
    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
            className="btn btn-primary"
            onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
};