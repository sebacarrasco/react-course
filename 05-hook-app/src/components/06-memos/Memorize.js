import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import "../02-useEffect/effects.css"
import { Small } from './Small';

export const Memorize = () => {


    const { state:counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    // La idea es que si se aprita el boton de Show/Hide se renderizará todo el componente
    // incluyendo el componente Small a pesar de que no ha cambiado nada en el. Para esto
    // se ocupa memo -> solo se renderizará Small si es que cambia alguna de sus properties

    return (
        <div>
            <h1> Counter: <Small value={ counter } /> </h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick= { () => increment() }
            >
                +1
            </button>

            <button 
                className="btn btn-outline-primary ms-3"
                onClick={ () => setShow(!show) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
