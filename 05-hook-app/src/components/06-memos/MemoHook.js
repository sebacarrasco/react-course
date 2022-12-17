import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter'
import "../02-useEffect/effects.css"

export const MemoHook = () => {


    const { state:counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    // La idea surge de que al apretar el boton Show/Hide se renderizará
    // todo el componente de nuevo (porque se cambia el satado de show)
    // lo que significa que se volverá a correr heavyProcess a pesar de que su
    // resultado no cambia porque no cambió el contador. Entonces useMemo
    // hace que solo se ejecute de nuevo la función si es que cambió una de las
    // dependencias que se pasan en el arreglo.

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [ counter ]);

    return (
        <div>
            <h1> MemoHook </h1>
            <h3> Counter: <small>{ counter }</small></h3>
            <hr/>

            <p> { memoHeavyProcess } </p> {/* En vez de: heavyProcess(counter) */}
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
