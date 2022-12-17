import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import "./Counter.css";

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1> Counter with Hook: { counter }</h1>
            <hr/>
            <button className="btn" onClick={() => increment(2)}>
                Add
            </button>
            <button className="btn" onClick={reset}>
                Reset
            </button>
            <button className="btn" onClick={() => decrement(2)}>
                Subtract
            </button>
        </>
    )
}
