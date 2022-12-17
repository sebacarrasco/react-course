import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    const mouseMove = (e) => setCoords({x: e.x, y: e.y});

    useEffect(() => {

        // Cada vez que aparezca el componente se añadirá un event listener
        // (Este es el efecto)
        window.addEventListener("mousemove", mouseMove);

        return () => {
            // Cada vez que se desmonte (desaparezca) el componente se removerá
            // el event listener. Esta es la parte de limpieza es importante en
            // este caso ya que si no se hace, se tendrán muchosevent listeners,
            // lo que consumirá mucha memoria.
            window.removeEventListener("mousemove", mouseMove);
            console.log("hola")
        };

    }, []); // Solo se ejecutará la primera vez que se muestra el componente

    return (
        <>
            <h3>Buena buena</h3>
            <p>X: { coords.x }, Y: { coords.y }</p>
        </>
    );
};