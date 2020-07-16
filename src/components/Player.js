import React, {useState} from 'react'
import '../styles/Player.css'
import OpcionesParaJugar from '../components/OpcionesParaJugar'
import IconoJugRed from '../icons/player-red.svg'


function Player(){

    const [eleccionJugador, setEleccionJugador] = useState('');
    //const [error, setEror] = useState(false);

    const consultaEleccion = eleccion => {
        setEleccionJugador(eleccion)
        
    }



    return(

        <div>
            <div className="imagen">
                <img src={IconoJugRed} alt="imagen jugador" />
            </div>
            <OpcionesParaJugar consultaEleccion={consultaEleccion}/>
            <p>Ganadas: </p>
            <p>Perdidas:</p>
            <span>icono seleccionado: {eleccionJugador}</span>
        </div>
    )
}

export default Player;