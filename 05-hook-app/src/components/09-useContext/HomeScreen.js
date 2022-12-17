import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    // Le pido que encuentre la instancia de UserContext en el árbol
    const { user } = useContext(UserContext)
    
    return (
        <div>
            <h1> Home Screen </h1>
            <hr />

            <pre className="container">
                { JSON.stringify( user, null, 3) }
            </pre>
        </div>
    )
}
