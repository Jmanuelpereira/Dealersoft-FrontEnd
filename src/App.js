import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
        <header>
          <Navbar />

          
        </header>

        <main role="main">
         <Home />

        </main>

       
           

               

       
    
    </div>
  );
}

export default App;
