import React, { useState } from 'react'

import Player from '../components/Player'


function SinglePlayer(){

    //Jugador
    const [eleccionJugador, setEleccionjugador]= useState('');
    const [ganadasJugador, setGanadasJugador]= useState(0);
    const [juegoTerminado, setJuegoTerminado]= useState(false);

    //CPU
    const eleccionesPosibles = ['Piedra', 'Papel', 'Tijeras', 'Lagarto', 'Spock'];
    const [eleccionCPU, setEleccionCPU] = useState('')
    const [ganadasCPU, setGanadasCPU]= useState(0);
    

    function verificarGanador(opcJug1 , opcCPU){

        var rta= '';
        if(opcJug1 ==='Piedra' && opcCPU=== 'Tijeras'){
            rta= 'jug1';
            return rta;
        }
         if(opcJug1 ==='Piedra' && opcCPU=== 'Lagarto'){
           rta='jug1';
           return rta;
        }
        if(opcJug1 ==='Piedra' && opcCPU=== 'Piedra'){
           rta='empate';
           return rta;
        }
        else{
            rta='jug2';
            return rta;
        }
        
    }

    function jugar(opcJug1 , opcCPU){
        if(!juegoTerminado){
            var eleccionRandom= eleccionesPosibles[Math.floor(Math.random() * eleccionesPosibles.length)];
            setEleccionCPU(eleccionRandom);
            var ganador =verificarGanador(opcJug1,opcCPU);
            if (ganador ==='jug1'){
                setGanadasJugador(ganadasJugador+1)
            }
            if(ganador==='jug2'){
                setGanadasCPU(ganadasCPU+1)
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
    }


    const verEleccion = eleccion =>{
        setEleccionjugador(eleccion)
    }

    return(
        <div>
            <Player verEleccion={verEleccion}/>
            {/* <Player/> */}
            <button className="boton-jugar" type="button" onClick={() => jugar(eleccionJugador,eleccionCPU)}>Jugar</button>
            <button className="boton-jugar" type="button" onClick={()=>reset()} >Jugar de Nuevo</button>
            <h1>El CPU eligió : {eleccionCPU}</h1>
            <h3>Ganadas CPU: {ganadasCPU}</h3>
            <h3>Ganadas Jug: {ganadasJugador}</h3>
            <h3>eleccion single: {eleccionJugador}</h3>
        </div>
    )
}

export default SinglePlayer;