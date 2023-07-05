import React from 'react'
import { useState } from 'react';
import Window from '../components/Window';
import './Header.css'
import Emoji from '../components/Emoji';

export default function () {
 const [isOpen, setIsOpen] = useState(false);

  const setUpWindow = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='container-header'>
        <h1>Let's play with AI</h1>
        <div className='container-button'>
        <button onClick={setUpWindow} className='button-rules'>
          <h2>Rules</h2>
         <Emoji label = "fire" symbol="❔" size = "50px"></Emoji>
        </button>
        
        <Emoji label = "fire" symbol="🧠" size = "50px"></Emoji>
        <Window isOpen={isOpen} closeWindow={setUpWindow} />
        </div>


        

    </div>
  )
}
