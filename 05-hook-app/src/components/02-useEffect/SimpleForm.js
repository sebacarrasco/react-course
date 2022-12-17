import React, { useEffect, useState } from 'react';
import "./effects.css";
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // useEffect( () => {
    //     console.log("wena")
    // });
    // Si no le pasamos un arreglo a useEffect, se ejecutará cada vez que
    // cambie algo del componente. Si le pasamos un arreglo vacío, solo
    // cuando se muestra por primera vez el componente. Si el arreglo contiene 
    // estado(s), cada vez que cambie alguno de esos estados se volverá a
    // ejecutar.

    const handleInputChange = ( { target } ) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value= { name }
                    onChange={ handleInputChange }
                />
            </div>

            <br></br>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@uc.cl"
                    autoComplete="off"
                    value= { email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === "123") && <Message /> }
        </>
    )
}
