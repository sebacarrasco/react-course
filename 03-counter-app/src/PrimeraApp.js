import React, { Fragment } from 'react';
import PropTypes from "prop-types"; //-> para validaciones de las props

// Estos son Functional Components
// Las props se pueden recibir como todo un objeto
// o desestructurizando -> en ese caso se pueden poner valores por defecto
const PrimeraApp = ( { saludo, parrafo = 'Cómo estamos?' } ) => {

    // Lo de fragment es necesario ya que se TIENE que retornar solo un elemento
    // (que puede contener a otros elementos)
    // Se podría hacer con un div pero estaríamos añadiendo elementos
    // inncesarios. Con el Fragment se ponen "sueltos"
    // return (
    //     <Fragment>
    //         <h1>Holaaa</h1>
    //         <p>Cómo estamos?</p>
    //     </Fragment>
    // );

    const objeto = {mensjaje: "hola", id: 2}

    // Poner un fragment es equivalente a poner etiquetas vacías
    return (
        <>
            <h1>{ saludo } locos</h1>
            <p>{ parrafo }</p>
            <p>Un booleano: {true} </p>
            <p> Un arreglo: { [1, 2, 3, 4] }</p>
            <pre> Un objeto: { JSON.stringify(objeto, null, 3) }</pre>
        </>
    );
    // { true } no mostraría nada en el html (ningún booleano)
    // Poner un {objeto} sin stringify tira error (null es el replacer y 3 es el espaciado -> para que se vea bonito)
}

// Validaciones de las props
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired // Sin el .isRequired, si es que no se pasa un valor, no tira error,
    // Solo tiraría error si es que se pasa un valor y este no es un string
}

// También se pueden poner acá los valores por defecto
// PrimeraApp.defaultProps = {
//     parrafo: "Buena buena"
// }

export default PrimeraApp;