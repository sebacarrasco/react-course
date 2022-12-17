import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    // Custom hook que se encarga de hacer la request de las imágenes
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Importante hacer notar que los efectos no pueden ser async
    useEffect( () => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category])

    return state;
}