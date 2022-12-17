import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("volví a generarme :c");
    return (
        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            Increment
        </button>
    )
}
);