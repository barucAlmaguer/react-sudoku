import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Board } from './components'

function Chess (props) {
  const [knightPos, setKnightPos] = useState([0, 0])
  function canMoveKnight ([fromX, fromY], [toX, toY]) {
    const dx = Math.abs(toX - fromX)
    const dy = Math.abs(toY - fromY)
    return ( dx === 1 && dy === 2 || dx === 2 && dy === 1 )
  }
  function moveKnightAround ([ x, y ]) {
    if (canMoveKnight([...knightPos], [x, y] )) {
      setKnightPos([x, y])
    } else {
      console.warn('invalid knight move!')
    }
  }
  return (
    <DndProvider backend={Backend}>
      <h1>Chess game</h1>
      <Board rows={4} columns={4} knightPosition={knightPos} onCellClick={moveKnightAround} />
    </DndProvider>
  )
}

export default Chess
