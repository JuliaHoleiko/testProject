import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import minimax from '../algo';
import './Game.css'

function Game(props) {
  const [matches, setMatches] = useState(props.matchesValue);
const [isPlayerTurn, setIsPlayerTurn] = useState(props.firstPlayer);
const [winner, setWinner] = useState(null);
const [userStep, setUserStep] = useState('');
const [aiStep, setAiStep] = useState('');
const [aiScore, setAiScore] = useState(0);
const [userScore, setUserScore] = useState(0);
const [isFirstRender, setIsFirstRender] = useState(true); 
const array = Array.from({ length: props.maxTurns }, (_, index) => index + 1);

useEffect(() => {
  if (!isFirstRender && !isPlayerTurn && matches > 0) {
    const aiMove = minimax(matches, 2, true, props.maxTurns).move;
    setTimeout(() => {
      setMatches((prev) => prev - aiMove);
      setIsPlayerTurn(true);
      setAiScore((prev) => prev + aiMove);
      setAiStep(aiMove);
      console.log(matches)
      checkGameStatus(matches-aiMove, aiScore+aiMove, 0 );
    }, 1000);
  } else {
    setIsFirstRender(false); 
  }
}, [isFirstRender, isPlayerTurn, matches]);

 

  function handlePlayerMove(numMatches) {
    if (matches - numMatches >= 0 && isPlayerTurn) {
      setUserScore((prev)=> prev+numMatches);
      setUserStep(numMatches);
      setMatches(matches - numMatches);
      setIsPlayerTurn(false);
     
      checkGameStatus(matches - numMatches, 0, userScore+numMatches);
    }
  }

  function checkGameStatus(matchesLeft, score1, score2) {
    if (matchesLeft === 0) {
      if(score1 !==0 && score1 % 2 === 0 ){
        setWinner('AI' );

      }
      else setWinner('You')
     
    } 
    
  }
  function generateMatches(count) {
    const array = [];
  
    for (let i = 0; i < count; i++) {
      array.push(<Match key={i} />);
    }
  
    return array;
  }

  return (
    <div className='container-game'>
      <div className='container-header--game'>
        <h1>Game of Matches</h1>
        <Match></Match>
      </div>
  
      <h2>Matches left: {matches}</h2>
      <p>Your score: {userScore}</p>
      <p>Last move: {userStep}</p>
      <div className='matches'> 
      {generateMatches(matches)}
      </div>
      <div>
        
        <p>Ai score:{aiScore}</p>
        <p>Last move: {aiStep}</p>
      {winner && <h2>Winner: {winner}</h2>}
     
      {isPlayerTurn && !winner ? 
        <div>
         {array.map((item)=>
         <button className='button-general' onClick={() => handlePlayerMove(item)}>Take {item} match</button>)}

        
        </div>
        :<></>
      }
      </div>
      {!isPlayerTurn && !winner && (
        <p>AI is thinking...</p>
      )}
      {isPlayerTurn && winner && (
        <>
        <h2>Game Over</h2>
        
        </>
        
      )}
    </div>
);
}

export default Game;