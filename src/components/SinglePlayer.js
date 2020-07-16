import React, { useState } from 'react'

import Player from '../components/Player'


function SinglePlayer(){


    const [eleccionJugador, setEleccionjugador]= useState('');
    const eleccionesPosibles = ['Piedra', 'Papel', 'Tijeras', 'Lagarto', 'Spock'];
    const eleccionCPU = eleccionesPosibles[Math.floor(Math.random() * eleccionesPosibles.length)]

    return(
        <div>
            <Player/>
            {/* <Player/> */}
            <button className="boton-jugar" type="submit">Jugar</button>
            <h1>El CPU eligió : {eleccionCPU}</h1>
        </div>
    )
}

export default SinglePlayer;