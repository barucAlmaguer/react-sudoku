import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Board } from './components'

function Chess (props) {
  const [knightPos, setKnightPos] = useState([0, 0])
  function moveKnightAround ([ x, y ]) {
    setKnightPos([x, y])
  }
  return (
    <DndProvider backend={Backend}>
      <h1>Chess game</h1>
      <Board rows={4} columns={4} knightPosition={knightPos} onCellClick={moveKnightAround} />
    </DndProvider>
  )
}

export default Chess
