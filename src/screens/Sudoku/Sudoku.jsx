import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function Sudoku (props) {
  return (
    <DndProvider backend={Backend}>
      <h1>Sudoku game</h1>
    </DndProvider>
  )
}

export default Sudoku
