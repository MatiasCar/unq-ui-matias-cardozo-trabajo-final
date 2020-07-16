import React from 'react'

function Error(mensaje){

    return(
        <div>
            <h1 text-color='red'>ERROR:+ {mensaje}</h1>
        </div>
    );
}

export default Error;