import React from 'react'
import BoardRow from '../BoardRow'
import BoardSquare from '../BoardSquare'
import { Knight } from '../chessPieces'

function arrFromSize(count) {
  return [...Array(count)]
}

function Board({ rows, columns, knightPosition, canMoveKnight, moveKnight }) {
  function isKnightHere ([x, y], [posX, posY]) {
    return posX === x && posY === y
  }
  function canMoveKnight([fromX, fromY], [toX, toY]) {
    const dx = Math.abs(toX - fromX)
    const dy = Math.abs(toY - fromY)
    const canMove = (dx === 1 && dy === 2 || dx === 2 && dy === 1)
    return canMove
  }
  return (
    <div className='chess-board'>{
      arrFromSize(rows).map((row, r) => (
        <BoardRow>{arrFromSize(columns).map((col, c) => (
          <BoardSquare
            key={c}
            x={c}
            y={r}
            moveKnight={moveKnight}
            canMoveKnight={(x, y) => canMoveKnight(knightPosition, [x, y])}
          >{
            isKnightHere([c, r], knightPosition) ? <Knight /> : null
          }</BoardSquare> ))}
        </BoardRow> 
      ))
    }</div>
  )
}

export default Board
