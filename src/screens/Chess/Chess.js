import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function Chess (props) {
  return (
    <DndProvider backend={Backend}>
      <h1>Chess game</h1>
    </DndProvider>
  )
}

export default Chess
