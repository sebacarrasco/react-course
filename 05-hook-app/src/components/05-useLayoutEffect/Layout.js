import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import "./layout.css";

export const Layout = () => {

    const { state:counter, increment } = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
    const { data } = useFetch(url);

    // si data es null -> !data es true y !!data es false (author y quote quedan undefined)
    // si data NO es null -> !data es false y !!data es true
    const { quote } = !!data && data[0];


    const quoteParragraph = useRef();
    const [boxSize, setBoxSize] = useState({});

    // Lo que se ponga dentro se hará después de cada vez que se termine de renderear el
    // DOM -> cuando no se le entrega un arreglo.
    // Cuando se le entrega un arreglo vacío -> similar al useEffect -> solo la primera
    // vez que se termina de renderear.
    // Ahora le pondremo la quote en el arreglo para que se ejecute lo de dentro
    // cada vez que se termine de renderear los cambios producidos por el cambio 
    // de quote.
    // En resumen, es como el useEffect, pero se ejecuta después de los cambios en el DOM.
    useLayoutEffect( () => {
        setBoxSize(quoteParragraph.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h3>Breaking Bad quotes con LayoutEffect</h3> 
            <hr/> 

            <blockquote className="blockquote text-end">
                <p ref={ quoteParragraph }> { quote } </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                Next quote
            </button>
        </div>
    )
}
