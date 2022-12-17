import React, { useCallback, useState } from 'react'
import "../02-useEffect/effects.css"
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    // Un uso para useCallback es cuando pasamos una función por properties a otro
    // componente. En este caso si creabamos el increment como está arriba, ShowIncrement
    // se volvería a generar cada vez que actualizamos el contador. Por eso usamos useCallback
    // haciendo que retorne una función que solo cambiará cuando cambie setCounter
    // y entonces solo cuando cambie esa función se volverá generar el ShowIncrement.
    // Importante notar que se hace esto junto con memo al increment.

    const increment = useCallback(
        () => {
            setCounter(c => c + 1)
        },
        [setCounter]);

    return (
        <div>
            <h1> useCallback Hook: { counter }</h1>
            <hr/>

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
