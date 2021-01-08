import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo})=>{
    return (
       
        < >
        <h1>{saludo}</h1>
         <p>{subtitulo}</p>
        </ >

    )

}
// Estas propiedades son para definir tipos de datos 
// y obligar a que manden informacion al componente
// props es la que recibe los argumentos de la función.
PrimeraApp.propTypes ={
    saludo:PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitulo:'Soy un default property'
}

export default PrimeraApp;