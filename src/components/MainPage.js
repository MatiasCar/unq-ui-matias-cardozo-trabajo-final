import React from 'react'

import Menu from './Menu'
import '../styles/MainPage.css'


function MainPage(){


    return(

        <div className="body-mainpage">
            <h1>Piedra, Papel, Tijera, Lagarto, Spock Game</h1>
            <Menu/>
        </div>

    )
}

export default MainPage;