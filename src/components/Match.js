import React from 'react'
import Stick from './Stick'
import './Match.css'
import Emoji from './Emoji'

export default function Match() {
  return (
    <div className='match'>
        <Emoji label = "fire" symbol="🔥"></Emoji>
         <Stick></Stick>
    </div>
  )
}
