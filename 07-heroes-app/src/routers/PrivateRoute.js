import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
// rest son el resto de las props (exact, path, entre otros posibles)
}) => {

    // Registramos el lastPath para luego, si el usuario hace logout,
    // vuelva a la misma ruta en que estaba antes.
    localStorage.setItem("lastPath", rest.location.pathname);

    return (
        <Route { ...rest }

            // Sí, al hacer component={algo} se puede poner props=>algo
            // así como con el setState(prevState => algo)
            component={ props => (
                ( isAuthenticated ) ? <Component { ...props }/>
                : <Redirect to="/login"/>
            )}

        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}