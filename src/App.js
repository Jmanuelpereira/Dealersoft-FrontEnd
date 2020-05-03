import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Dealersoft working bitch
        </p>
        <Router>

          <Switch>

`           <Route exact path='/' component={Home} />
            <Route exact path='/signup-page'  />
            <Route exact path='/private'  />`
          
          </Switch>

        </Router>
        
        <a
          className="App-link"
          href="https://gripert.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
