import React from 'react'
import '../styles/Player.css'
import OpcionesParaJugar from '../components/OpcionesParaJugar'
import IconoJugRed from '../icons/player-red.svg'


function Player({verEleccion}){


    const consultaEleccion = eleccion => {
        
        verEleccion(eleccion)
    }



    return(

        <div>
            <div className="imagen">
                <img src={IconoJugRed} alt="imagen jugador" />
            </div>
            <OpcionesParaJugar consultaEleccion={consultaEleccion}/>
            
            
        </div>
    )
}

export default Player;