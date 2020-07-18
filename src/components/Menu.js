import React from 'react';
import '../styles/Menu.css'
import {Link} from 'react-router-dom'



function Menu(){


    return(
        <div className="body-menu">
            <div className="cuadro-botones">
                <Link to="/single-player">
                    <button className="boton" type="button">1 Jugador</button> 
                </Link>
                <Link to="/multiplayer">
                    <button className="boton" type="button">2 Jugadores</button>
                </Link>
                <Link to="/rules">
                    <button className="boton" type="button">Reglas</button>
                </Link>
            </div>
        
        </div>
    )

}


export default Menu;