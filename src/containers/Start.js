import React, { useState } from 'react'
import Game from './Game';
import './Start.css'
import Header from './Header';

export default function Start() {
    const [numberOfMatches, setNumberofMatches] = useState('');
    const [numberOfTurns, setNumberOfTurns] = useState('');
    const [errorMessage, setErrorMessage] = useState(1);
    const [startGame, setStartGame] = useState(0);
    const [firstPlayer, setFirstPlayer] = useState(0) // first player - AI
    const [playAgain, setPlayAgain] = useState(0);
    
    
   
    const changeInputMatches = (event) =>{
        if(event.target.value > 0){
            setNumberofMatches(event.target.value);
            setErrorMessage(1)
        }
        else setErrorMessage(0);
        

    }
    const changeInputTurns = (event) =>{
        if(event.target.value > 0){
            setNumberOfTurns(event.target.value);
            setErrorMessage(1)
        }
        else setErrorMessage(0);
        

    }
    const startGameFunc = () =>{
        if(!playAgain){
            if(errorMessage && numberOfMatches > 0 && numberOfTurns > 0){
                setStartGame(1);
                setPlayAgain(1)
            }
            else {
                setStartGame(0);
                setErrorMessage(0)
            }
        }
        else {
            setPlayAgain(0)
            setStartGame(0);
            setNumberOfTurns('');
            setNumberofMatches('')
        }
        

    }
    const clearInputMatch = () =>{
       
        setNumberofMatches('')
    }
    const clearInputTurn = () =>{
        setNumberOfTurns('')
        
    }
    const chacngeFirstPlayer = () =>{
        if(!firstPlayer)
            setFirstPlayer(1)
        else 
        setFirstPlayer(0)

    }
    
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleModal = () => {
          setIsOpen(!isOpen);
        };
  return (
    <div className='container'>
        <Header></Header>
         {!startGame ? 
        <div className='container-setup'>
           
            <div className='container-task'>
                <h3>Are you ready?</h3>
                <p>Setup your game and choose who has the first move. Number of matches is 2n-1. Matches allowed to take on each turn is from 1 to m.</p>  
            </div>
            <div className='container-inputs'>
           
            <div className='container-input'>
                <label>Choose n: </label>
                <input value ={numberOfMatches} type='number' onChange={changeInputMatches}></input>
                <button  className='button-general' onClick={clearInputMatch}>Clear Inputs</button>
            </div>
            <div className='container-input'>
                <label> Choose m: </label>
                <input value ={numberOfTurns}  type='number' onChange={changeInputTurns}></input>
                <button className='button-general' onClick={clearInputTurn}>Clear Inputs</button>
            </div>
            </div>
            <div className='container-input'>
            {firstPlayer ? <p>You are the first</p> :<p>Ai is the first</p> }
            <button className='button-general' onClick={chacngeFirstPlayer}>Change first player</button> 
            </div>
    
            {errorMessage ? <p></p> : <p>Wrong value</p>}
          
            
            
        </div>
        : <Game matchesValue = {numberOfMatches*2 - 1} maxTurns = {numberOfTurns} firstPlayer = {firstPlayer}></Game> }

            <div className='container-input'>
                <button className='button-general' onClick={startGameFunc}>{!playAgain? "Start game": "Play again"}</button>
            </div>
       
    </div>
    
  )
}
