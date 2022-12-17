import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
    const user = {
        id: 123,
        name: "Seba"
    }

    return (
        <div>
            <h1> Login Screen </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => setUser(user) }
            >
                Login
            </button>
        </div>
    )
}
