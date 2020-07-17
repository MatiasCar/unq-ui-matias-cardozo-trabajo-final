import React, { useState } from 'react'

import Player from '../components/Player'


function SinglePlayer(){

    //Jugador
    const [eleccionJugador, setEleccionjugador]= useState('');
    const [ganadasJugador, setGanadasJugador]= useState(0);
    const [juegoTerminado, setJuegoTerminado]= useState(false);

    //CPU
    const eleccionesPosibles = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
    const [eleccionCpu,setEleccionCPU] = useState('');
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
            var eleccionRandom = eleccionesPosibles[Math.floor(Math.random() * eleccionesPosibles.length)]
            setEleccionCPU(eleccionRandom);
            
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
        setEleccionCPU('');
        setJuegoTerminado(false);
        setGanadorDeRonda('');
    }


    const verEleccion = eleccion =>{
        setEleccionjugador(eleccion)
    }

    return(
        <div>
            <Player verEleccion={verEleccion}/>
            <button className="boton-jugar" type="button" onClick={() => jugar(eleccionJugador)}>Jugar</button>
            <button className="boton-jugar" type="button" onClick={()=>reset()} >Jugar de Nuevo</button>
            <h1>Eleccion del Jugador: {eleccionJugador}</h1>
            <h1>El CPU eligió : {eleccionCpu}</h1>
            <h2>Resultado final: {ganadorDeRonda}</h2>
            <h3>Ganadas CPU: {ganadasCPU}</h3>
            <h3>Ganadas Jugador: {ganadasJugador}</h3>
            
        </div>
    )
}

export default SinglePlayer;