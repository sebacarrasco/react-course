import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

    const { state:counter, increment } = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
    const {data, loading} = useFetch(url);

    // si data es null -> !data es true y !!data es false (author y quote quedan undefined)
    // si data NO es null -> !data es false y !!data es true
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h3>Breaking Bad quotes</h3> 
            <hr/> 

            {
                loading?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p id="quote-parragraph"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                Next quote
            </button>
        </div>
    )
}
