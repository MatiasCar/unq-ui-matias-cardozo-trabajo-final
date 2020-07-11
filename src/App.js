import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SinglePlayer from './contents/SinglePlayer'
import MainPage from './contents/MainPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/single-player" component={SinglePlayer}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
