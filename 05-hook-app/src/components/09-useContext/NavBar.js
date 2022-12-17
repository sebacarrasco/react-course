import React from 'react';
import { NavLink } from 'react-router-dom';

// La diferencia entre Link y NavLink es que navlink acepta el atributo
// activeClassName, que permita agregar una clase al link cuando
// su ruta está activa.

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <NavLink className="navbar-brand" to="/">Usecontext App</NavLink>

                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" activeClassName="active" exact to="/">Home</NavLink>
                    
                        <NavLink className="nav-item nav-link" activeClassName="active" exact to="./about">About</NavLink>
                    
                        <NavLink className="nav-item nav-link" activeClassName="active" exact to="./login">Login</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}
