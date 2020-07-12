import React from 'react';
import {Link} from 'react-router-dom'


function Menu(){

    return(
        <div className="body-menu">
            <div className="cuadro-botones">
                <Link to="/single-player">
                    <button className="boton" type="button">1 Jugador</button> 
                </Link>
                <button className="boton" type="button">2 Jugadores</button>
                <button className="boton" type="button">Reglas</button>
            </div>
        
        </div>
    )

}


export default Menu;