import React from 'react'
import '../styles/OpcionesParaJugar.css'
import {useState} from 'react'

import Piedra from '../icons/piedra.svg'
import Papel from '../icons/papel.svg'
import Tijeras from '../icons/tijeras.svg'
import Lagarto from '../icons/lagarto.svg'
import Spock from '../icons/spock.svg'

function OpcionesParaJugar({consultaEleccion}){



    const pasarEleccion= (eleccion)=>{
        consultaEleccion(eleccion);
        
    }

    return(
        <div className="iconos-menu">
            <img className="iconos" src={Piedra} alt="Piedra" onClick={() => pasarEleccion('Piedra')}/>
            <img className="iconos" src={Papel} alt="Papel" onClick={() => pasarEleccion('Papel')}/>
            <img className="iconos" src={Tijeras} alt="Tijeras" onClick={() => pasarEleccion('Tijeras')}/>
            <img className="iconos" src={Lagarto} alt="Lagarto" onClick={() => pasarEleccion('Lagarto')}/>
            <img className="iconos" src={Spock} alt="Spock" onClick={() => pasarEleccion('Spock')}/>
            
        </div>
    )
}

export default OpcionesParaJugar;