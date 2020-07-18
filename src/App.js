import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SinglePlayer from './components/SinglePlayer'
import MainPage from './components/MainPage'
import Rules from './components/Rules'
import Multiplayer from './components/Multiplayer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/single-player" component={SinglePlayer}/>
          <Route exact path="/multiplayer" component={Multiplayer}/>
          <Route exact path="/rules" component={Rules}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
