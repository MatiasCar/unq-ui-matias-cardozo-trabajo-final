import React from 'react'
import '../styles/Rules.css'

import {Link} from 'react-router-dom'
import Volver from '../icons/cancelar.svg'
import Reglas from '../icons/reglas-del-juego.svg'

function Rules(){

    return(
        <div className="body-reglas">

            <h1 className="titulo">Reglas del juego</h1>
            <img src={Reglas} alt="reglas del juego" className="img-reglas"/>
            <Link to="/">
                <img src={Volver} alt ="icono de volver" className="boton-volver"/>
            </Link>
            
    </div>
    )

    
}

export default Rules;