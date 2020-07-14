import React from 'react'
//import {useState} from 'react'
import '../styles/Player.css'
import OpcionesParaJugar from '../components/OpcionesParaJugar'
import IconoJugRed from '../icons/player-red.svg'


function Player(){




    return(

        <div>
            <div className="imagen">
                <img src={IconoJugRed} alt="imagen jugador" />
            </div>
            <OpcionesParaJugar/>
            <p>Ganadas: </p>
            <p>Perdidas:</p>
        </div>
    )
}

export default Player;