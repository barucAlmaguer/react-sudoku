import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../DragAndDrop'

export default function Knight () {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <div
      ref={dragRef}
      style={{
        height: '100%',
        fontSize: '80px',
        lineHeight: '80px',
        textAlign: 'center',
        cursor: 'move',
        opacity: isDragging ? 0.25 : 1,
      }}
    >
      ♘
    </div>
  )
}
