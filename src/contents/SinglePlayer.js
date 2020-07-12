import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/SinglePlayer.css'

import Piedra from '../icons/piedra.svg'
import Papel from '../icons/papel.svg'
import Tijeras from '../icons/tijeras.svg'
import Lagarto from '../icons/lagarto.svg'
import Spock from '../icons/spock.svg'


function SinglePlayer(){

    return(
        <div className="iconos-menu">
                <Link to="/">
                    <img className="iconos" src={Piedra} alt="icono 1" />
                </Link>
            <img className="iconos" src={Papel} alt="icono 2"/>
            <img className="iconos" src={Tijeras} alt="icono 3"/>
            <img className="iconos" src={Lagarto} alt="icono 4"/>
            <img className="iconos" src={Spock} alt="icono 5"/>
        </div>
    )
}

export default SinglePlayer;