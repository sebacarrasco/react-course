import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({
    isLogged,
    component: Component,
    ...rest
// rest son el resto de las props (exact, path, entre otros posibles)
}) => {


    return (
        <Route { ...rest }

            component={ props => (
                ( isLogged ) ? <Component { ...props }/>
                : <Redirect to="/auth"/>
            )}

        />
    )
}

PrivateRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}