import React from 'react'
import {GifGridItem} from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    // // // Cuando cambie un elemento del arreglo que se le pasa
    // // // al useEffect, entonces se volverá a aejecutar getGifs
    // // // (En este caso solo se ejecutará solo una vez ya que
    // // // category no cambia nunca)
    // useEffect( () => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category]);

    // Lo que está comentado arriba es equivalente a lo siguiente
    // (usando un custom hook que por detrás usa useEffect)
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                    {
                    images.map(img => 
                            <GifGridItem key={img.id} {...img}/> // Estamos haciendo spread del objeto img para
                                                                // para pasar sus propiedades "sueltas"
                    )
                    }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};