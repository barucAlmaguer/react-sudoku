import React from 'react'
import styled from 'styled-components'
import { BoardRow } from '../BoardRow'
import { BoardSquare } from '../BoardSquare'
import { Knight } from '../chessPieces'

const StyledBoard = styled.div`
  display: grid;
  justify-content: center;
`

function arrFromSize(count) {
  return [...Array(count)]
}

function Board({ rows, columns, knightPosition, canMoveKnight, moveKnight }) {
  function isKnightHere ([x, y], [posX, posY]) {
    return posX === x && posY === y
  }
  return (
    <StyledBoard>{
      arrFromSize(rows).map((row, y) => (
        <BoardRow key={y} >{arrFromSize(columns).map((col, x) => (
          <BoardSquare
            key={x}
            x={x}
            y={y}
            moveKnight={moveKnight}
            canMoveKnight={canMoveKnight(knightPosition, [x, y])}
          >{
              isKnightHere([x, y], knightPosition) ? <Knight /> : null
            }</BoardSquare>))}
        </BoardRow>
      ))
    }</StyledBoard>
  )
}

export default Board
