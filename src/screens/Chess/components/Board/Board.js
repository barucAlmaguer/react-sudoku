import React from 'react'
import BoardRow from '../BoardRow'
import BoardCell from '../BoardCell'
import { Knight } from '../chessPieces'

function arrFromSize(count) {
  return [...Array(count)]
}

function Board({ rows, columns, knightPosition, onCellClick }) {
  function isBlack (row, col) {
    return (row % 2 + col) % 2 === 0
  }
  function isKnightHere (x, y, [posX, posY]) {
    return posX === x && posY === y
  }
  return (
    <div className='chess-board'>{arrFromSize(rows).map((row, r) => (
      <BoardRow>{arrFromSize(columns).map((col, c) => (
        <BoardCell
          key={c}
          black={isBlack(r, c)}
          onClick={() => { onCellClick([c, r]) }}
        >{
          isKnightHere(c, r, knightPosition)
          ? <Knight />
          : null
        }</BoardCell> ))}
      </BoardRow> )) }
    </div>
  )
}

export default Board
