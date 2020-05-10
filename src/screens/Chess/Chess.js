import React, { useState, useCallback } from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Board } from './components'

function Chess (props) {
  const [knightPosition, setknightPosition] = useState([0, 0])
  return (
    <DndProvider backend={Backend}>
      <h1>Chess game</h1>
      <Board
        rows={4}
        columns={4}
        knightPosition={knightPosition}
        moveKnight={setknightPosition}
      />
    </DndProvider>
  )
}

export default Chess
