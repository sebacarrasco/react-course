import { useEffect, useState, useRef } from "react";


export const useFetch = ( url ) => {

    // La primera vez que se llama, el componente está montado
    const isMounted = useRef(true);
    
    const [state, setState] = useState(
        {
            data: null,
            loading: true,
            error: null
        }
    );

    useEffect( () => {
        // Cuando se muestre el componente por primera vez no hará nada

        // Cuando se desmonte el componente se cambiará el valor de isMounted
        return () => isMounted.current = false;
    }, []);

    useEffect( () => {


        // Esto es para que aparezca cargando en las siguientes requests
        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(response => response.json())
            .then(data => {
                
                // Solo si el componente está montado se actualizará
                // el estado, porque en caso contrario tiraría error.
                if (isMounted.current)
                {
                    setState({
                        loading: false,
                        error: false,
                        data
                    });
                }
            })
            .catch( () => {
                setState({
                    data:null,
                    loading: false,
                    error: "Couldn't load the info"
                })
            });
    }, [url]); // Se ejecutará solo cuando cambia el url

    return state;

};