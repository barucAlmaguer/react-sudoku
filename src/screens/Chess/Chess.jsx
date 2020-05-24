import React, { useState, useCallback, Fragment } from 'react'
import { Board } from './components'
import { H1 } from '../../components'

function Chess (props) {
  const [knightPosition, setknightPosition] = useState([0, 0])
  function canMoveKnight([fromX, fromY], [toX, toY]) {
    const dx = Math.abs(toX - fromX)
    const dy = Math.abs(toY - fromY)
    const canMove = (dx === 1 && dy === 2 || dx === 2 && dy === 1)
    return canMove
  }
  return (
    <Fragment>
      <H1>Chess game</H1>
      <Board
        rows={8}
        columns={8}
        knightPosition={knightPosition}
        canMoveKnight={canMoveKnight}
        moveKnight={setknightPosition}
      />
    </Fragment>
  )
}

export default Chess
