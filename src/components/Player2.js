import React from 'react'
import '../styles/Player.css'
import OpcionesParaJugar from './OpcionesParaJugar'
import IconoJugRed from '../icons/player-red.svg'


function Player({verEleccionJ2}){


    const consultaEleccion = eleccion => {
        
        verEleccionJ2(eleccion)
    }



    return(

        <div className="player2">
            <div className="imagen">
                <img src={IconoJugRed} alt="imagen jugador" />
            </div>
            <OpcionesParaJugar consultaEleccion={consultaEleccion}/>
            
            
        </div>
    )
}

export default Player;