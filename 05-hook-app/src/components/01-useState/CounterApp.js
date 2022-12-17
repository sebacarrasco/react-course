import React, { useState } from 'react'
import "./Counter.css";


export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2 } = state;
    return (
        <>
            <h1> Counter 1: { counter1 } </h1>
            <h1> Counter 2: { counter2 } </h1>
            <hr/>

            {/* Nótese que hacemos spread para no tener que escribir de nuevo
                toodas las propiedades que actualizaremos. Y sobreescribimos
                solo el counter 1 (es importante que vaya después del spread)*/}
            <button
                className="btn btn-primary"
                onClick={() => setState({
                    ...state,
                    counter1: counter1 + 1
                })}
            >
                +1 al counter 1
            </button>
        </>
    )
}
