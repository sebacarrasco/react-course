import React, { useRef } from 'react'
import "../02-useEffect/effects.css"
export const FocusScreen = () => {

    // El useRef sirve en este caso para tener referencia a elemntos html
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        // Sin el html habría que haber hecho document.querySelector...
    }

    return (
        <div>
            <h1> Focus Screen </h1>
            <hr/>

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-2"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
