import logo from './logo.svg';
import './App.css';
import Game from './containers/Game';
import Start from './containers/Start';
import { useState } from 'react';

function Interface() {
 
  return (
    <div className="App">
     <Start></Start>
    </div>
  );
}

export default Interface;
