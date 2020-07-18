import React,{useState} from 'react'
import Player from '../components/Player'
import Player2 from '../components/Player2'
import '../styles/PartidasStyles.css'
import Verificador from '../Verificador'


function Multiplayer(){

    //Datos jugador 1
    const [ganadasJug1, setGanadasJug1]= useState(0);
    const [eleccionJug1, setEleccionJug1]= useState('');

    //Datos jugador 2
    const [ganadasJug2, setGanadasJug2]= useState(0);
    const [eleccionJug2, setEleccionJug2]= useState('');


    const [juegoTerminado, setJuegoTerminado]= useState(false);
    const [ganadorDeRonda, setGanadorDeRonda]= useState('');

    

    const verEleccionJ1 = eleccion =>{
        if(!juegoTerminado){
            setEleccionJug1(eleccion)
        }
    }

    const verEleccionJ2 = eleccion =>{
        if(!juegoTerminado){
            setEleccionJug2(eleccion)
        }
    }


    function jugar(eleccionJ1, eleccionJ2){
        if(!juegoTerminado && eleccionJ1!=='' && eleccionJ2!==''){
           var ganador =Verificador(eleccionJ1, eleccionJ2);
           if(ganador ==='jug1'){
                setGanadasJug1(ganadasJug1+1);
                setGanadorDeRonda('Ganador Jugador 1');
           }
           if(ganador==='jug2'){
                setGanadasJug2(ganadasJug2+1);
                setGanadorDeRonda('Ganador Jugador 2');
           }
           if(ganador==='empate'){
                setGanadorDeRonda('Empate')
           }
           setJuegoTerminado(true)
        }
    }

    function reset(){
        setGanadorDeRonda('');
        setEleccionJug1('');
        setEleccionJug2('');
        setJuegoTerminado(false);
    }
    

    return(
        <div className="body-multiplayer">

            <div className="jugador1">
                <Player verEleccionJ1={verEleccionJ1}/>
                <div className="datos-jugador">
                    <h3>Jugador 1</h3>
                    <h3>Ganadas: {ganadasJug1}</h3>
                    <h2>Elegiste: {eleccionJug1}</h2>
                </div> 
            </div>

            <div className="jugador2">
                <Player2 verEleccionJ2={verEleccionJ2}/>
                <div className="datos-jugador">
                <h3>Jugador 2</h3>
                    <h3>Ganadas: {ganadasJug2}</h3>
                    <h2>Elegiste: {eleccionJug2}</h2>   
                </div>
            </div>
            
            <div className="botones-jugar-mult">
                <button className="boton" type="button" onClick={() => jugar(eleccionJug1, eleccionJug2)}>Jugar</button>
                <button className="boton" type="button" onClick={()=>reset()} >Jugar de Nuevo</button>
            </div>

            <h2 className="resultado-final">Resultado final: {ganadorDeRonda}</h2>

        </div>
    );
}

export default Multiplayer;