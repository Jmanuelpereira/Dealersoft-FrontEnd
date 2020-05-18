import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {


  //






render() {
  return (
    <div className="App">
        <header>
          <Navbar />

          
        </header>

        <main role="main" class="">
         <Home />

        </main>

       
    </div>
  );

  }
}

export default App;
