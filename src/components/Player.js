import React from 'react'
import '../styles/Player.css'
import OpcionesParaJugar from '../components/OpcionesParaJugar'
import IconoJugBlue from '../icons/player-blue.svg'


function Player({verEleccionJ1}){


    const consultaEleccion = eleccion => {
        
        verEleccionJ1(eleccion)
    }



    return(

        <div className="player">
            <div className="imagen">
                <img src={IconoJugBlue} alt="imagen jugador" />
            </div>
            <OpcionesParaJugar consultaEleccion={consultaEleccion}/>
            
            
        </div>
    )
}

export default Player;