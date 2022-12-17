import React, {useState} from 'react';
import PropTypes from "prop-types";

const CounterApp = ( { value = 10 } ) => {

    const [counter, setCounter] = useState(value);
    // UseState retorna una variable y una función para setear el valor de dicha variable

    // Handdle +1
    const handleAdd = (e) => {
        setCounter(counter + 1)
        // equivalente a setCounter(c => c + 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    const handleSubstract = () => {
        setCounter((c) => c - 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )
}

// Validaciones
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;