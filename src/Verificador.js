
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
    }
    return rta;
}

export default verificarGanador;


