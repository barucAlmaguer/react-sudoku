import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Board } from './components'

function Chess (props) {
  return (
    <DndProvider backend={Backend}>
      <h1>Chess game</h1>
      <Board />
    </DndProvider>
  )
}

export default Chess
