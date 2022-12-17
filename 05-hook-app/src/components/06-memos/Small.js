import React from 'react'

// memo -> solo se renderizará Small si es que cambia alguna de sus properties

export const Small = React.memo(( { value } ) => {
    
    return (
        <small>
            { value }
        </small>
    )
}
);