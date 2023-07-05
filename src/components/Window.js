import React from 'react'
import './Window.css'

export default function Window(props) {
  return (
    <>
    {props.isOpen && 
    
    <div className="modal">
      <div className="modal-content">
        <h2>Rules</h2>
        <p>
        Rules are simple.
        Firstly, choose number of matches and number of matches allowed to take on each turn. For example,
        from the pile of 25 matches, each player takes either 1, 2 or 3 matches on each turn. The game is over once all matches are taken.
        Whoever has the even amount of matches wins.
        </p>
        <p>Good luck!</p>
        <button onClick={props.closeWindow} className='button-general'>Close</button>
      </div>
   
    </div>}
    </>
    
  )
}
