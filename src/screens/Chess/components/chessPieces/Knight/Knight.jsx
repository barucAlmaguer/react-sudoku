import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { ItemTypes } from '../../DragAndDrop'
import { knightImage } from '../assets'
export default function Knight () {
  const [{ isDragging }, dragRef, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={dragRef}
        style={{
          height: '100%',
          fontSize: '60px',
          lineHeight: '60px',
          textAlign: 'center',
          cursor: 'move',
          opacity: isDragging ? 0.25 : 1,
        }}
      >
        ♘
      </div>
    </>
  )
}
