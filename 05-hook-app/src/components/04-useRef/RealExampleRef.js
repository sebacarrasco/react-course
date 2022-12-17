import React, { useState } from 'react';
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

// useRef es básicamente un setState pero que solo retorna el state
// y se puede modificar directamente. Además, al modificarlo no se
// vuelve a renderear.
// Para lo que más se ocupa es para tener referencias a elementos del DOM (No es este el caso)
// En esta ocasión se usa para prevenir cambiar el state de un componente que ya no
// está montado

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real example with Ref</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ () => setShow(!show) }
            >
                Show/Hide
            </button>
        </div>
    )
};
