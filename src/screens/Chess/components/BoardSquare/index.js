import React from 'react'
import styled from 'styled-components'
import { useDrop } from 'react-dnd'
import Square from '../Square'
import Overlay from '../Overlay'
import { ItemTypes } from '../DragAndDrop'

export function BoardSquare({ x, y, moveKnight, canMoveKnight, children }) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.KNIGHT,
    canDrop: () => canMoveKnight,
    drop: () => {
      // Might as well use: monitor.getItem()
      if (canMoveKnight) {
        moveKnight([x, y])
      } else {
        console.warn('Invalid move!')
      }
    },
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  })
  function isBlack(x, y) {
    return (y % 2 + x) % 2 === 0
  }
  return (
    <div
      ref={dropRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={isBlack(x, y)} >{children}</Square>
      {isOver && canDrop && <Overlay color='yellow' />}
      {isOver && !canDrop && <Overlay color='red' />}
      {!isOver && canDrop && <Overlay color='green' />}
    </div>
  )
}
