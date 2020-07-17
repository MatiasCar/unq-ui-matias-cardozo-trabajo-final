import React, { useState } from 'react'

//importo iconos 
import Piedra from '../icons/piedra.svg'
import Papel from '../icons/papel.svg'
import Tijeras from '../icons/tijeras.svg'
import Lagarto from '../icons/lagarto.svg'
import Spock from '../icons/spock.svg'


import Player from '../components/Player'

import '../styles/SinglePlayer.css'

function SinglePlayer(){

    //Jugador
    const [eleccionJugador, setEleccionjugador]= useState('');
    const [ganadasJugador, setGanadasJugador]= useState(0);
    const [juegoTerminado, setJuegoTerminado]= useState(false);

    //CPU
    const iconosPosibles= [Piedra, Papel, Tijeras, Lagarto, Spock];
    const [iconoRandom, setIconoRandom]= useState('');
    const eleccionesPosibles = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
    
    const [ganadasCPU, setGanadasCPU]= useState(0);

    const [ganadorDeRonda, setGanadorDeRonda]= useState('');
    

    function verificarGanador(opcJug1 , opcCPU){

        var rta= '';

        //Casos para eleccion 'Piedra' del jugador
        if(opcJug1 === 'Piedra'){
            //gana contra:
            if(opcCPU === 'Tijera' || opcCPU === 'Lagarto'){
                rta = 'jug1'
            }
            //pierde contra:
            if(opcCPU === 'Papel' || opcCPU === 'Spock'){
                rta = 'jug2'
            }
            if(opcCPU === 'Piedra'){
                rta = 'empate'
            }
            return rta;
        }

        //Casos para eleccion 'Papel' del jugador
        if(opcJug1 === 'Papel'){
            //gana contra:
            if(opcCPU === 'Piedra' || opcCPU === 'Spock'){
                rta = 'jug1'
            }
            //pierde contra:
            if(opcCPU === 'Tijera' || opcCPU === 'Lagarto'){
                rta = 'jug2'
            }
            if(opcCPU === 'Papel'){
                rta = 'empate'
            }
            return rta;
        }
        //Casos para eleccion 'Tijera' del jugador
        if(opcJug1 === 'Tijera'){
            //gana contra:
            if(opcCPU === 'Papel' || opcCPU === 'Lagarto'){
                rta = 'jug1'
            }
            //pierde contra:
            if(opcCPU === 'Piedra' || opcCPU === 'Spock'){
                rta = 'jug2'
            }
            if(opcCPU === 'Tijera'){
                rta = 'empate'
            }
            return rta;
        }
        //Casos para eleccion 'Lagarto' del jugador
        if(opcJug1 === 'Lagarto'){
            //gana contra:
            if(opcCPU === 'Papel' || opcCPU === 'Spock'){
                rta = 'jug1'
            }
            //pierde contra:
            if(opcCPU === 'Piedra' || opcCPU === 'Tijera'){
                rta = 'jug2'
            }
            if(opcCPU === 'Lagarto'){
                rta = 'empate'
            }
            return rta;
        }
        //Casos para eleccion 'Spock' del jugador
        if(opcJug1 === 'Spock'){
            //gana contra:
            if(opcCPU === 'Tijera' || opcCPU === 'Piedra'){
                rta = 'jug1'
            }
            //pierde contra:
            if(opcCPU === 'Lagarto' || opcCPU === 'Papel'){
                rta = 'jug2'
            }
            if(opcCPU === 'Spock'){
                rta = 'empate'
            }
            return rta;
        }
 
    }

    function jugar(opcJug1){
        if(!juegoTerminado && opcJug1 !==''){
            //Seteo una eleccion random para el cpu
            var valorRandom = Math.floor(Math.random() * eleccionesPosibles.length);
            var eleccionRandom = eleccionesPosibles[valorRandom];
            
            setIconoRandom(iconosPosibles[valorRandom])
            
            
            var ganador =verificarGanador(opcJug1, eleccionRandom);
            if (ganador ==='jug1'){
                setGanadasJugador(ganadasJugador+1)
                setGanadorDeRonda('Ganador Jugador 1')
            }
            if(ganador==='jug2'){
                setGanadasCPU(ganadasCPU+1)
                setGanadorDeRonda('Ganador CPU')
            }
            if(ganador === 'empate'){
                setGanadorDeRonda('Empate')
            }
            console.log(ganador)
            setJuegoTerminado(true)
        }
        else{
            //tirar error
        }
        
    }

    function reset(){
        setEleccionjugador('');
        setIconoRandom(null);
        setJuegoTerminado(false);
        setGanadorDeRonda('');
    }


    const verEleccion = eleccion =>{
        if(!juegoTerminado){
            setEleccionjugador(eleccion)
        }
    }

    return(
        <div className="body-singleplayer">
            <Player verEleccion={verEleccion}/>
            <div className="datos-jugador">
                <h3>Ganadas: {ganadasJugador}</h3>
                <h2>Elegiste: {eleccionJugador}</h2>
            </div>
            <div className="botones-jugar">
                <button className="boton" type="button" onClick={() => jugar(eleccionJugador)}>Jugar</button>
                <button className="boton" type="button" onClick={()=>reset()} >Jugar de Nuevo</button>
            </div>
            <div className="datos-cpu">
                <h2 className="datos-cpu-texto">El CPU eligió : </h2>
                <h3 className="datos-cpu-texto">Ganadas CPU: {ganadasCPU}</h3>
                <img className="iconoSeleccionCpu" src={iconoRandom} alt='' />
            </div>
                <h1 className="resultado">Resultado final: {ganadorDeRonda}</h1>
            
        </div>
    )
}

export default SinglePlayer;