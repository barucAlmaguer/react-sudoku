import React from 'react'
import BoardRow from '../BoardRow'
import BoardCell from '../BoardCell'

function Board (props) {
  const rows = [0, 0, 0, 0]
  const columns = [0, 0, 0, 0]
  return (
    <div className='chess-board'>{ rows.map((row, r) => (
      <BoardRow>{ columns.map((col, c) => (
        <BoardCell key={c} black /> ))}
      </BoardRow> )) }
    </div>
  )
}

export default Board
