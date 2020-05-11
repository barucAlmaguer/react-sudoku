import React, { useState, useCallback } from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Board } from './components'

function Chess (props) {
  const [knightPosition, setknightPosition] = useState([0, 0])
  function canMoveKnight([fromX, fromY], [toX, toY]) {
    const dx = Math.abs(toX - fromX)
    const dy = Math.abs(toY - fromY)
    const canMove = (dx === 1 && dy === 2 || dx === 2 && dy === 1)
    return canMove
  }
  return (
    <DndProvider backend={Backend}>
      <h1>Chess game</h1>
      <Board
        rows={8}
        columns={8}
        knightPosition={knightPosition}
        canMoveKnight={canMoveKnight}
        moveKnight={setknightPosition}
      />
    </DndProvider>
  )
}

export default Chess
