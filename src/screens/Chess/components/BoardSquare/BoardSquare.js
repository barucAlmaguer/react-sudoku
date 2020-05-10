import React from 'react'
import { useDrop } from 'react-dnd'
import Square from '../Square'
import { ItemTypes } from '../DragAndDrop'

function BoardSquare ({ x, y, moveKnight, canMoveKnight, children }) {
  const [{isOver, canDrop}, dropRef] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => {
      // Might as well use: monitor.getItem()
      if (canMoveKnight(x, y)) {
        moveKnight([x, y])
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
    </div>
  )
}

export default BoardSquare
