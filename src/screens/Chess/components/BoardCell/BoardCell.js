import './BoardCell.css'
import React from 'react'
import classNames from 'classnames'

function BoardCell({ black, onClick,children }) {
  const classes = classNames(
    'board-cell',
    { 'white': !black },
    { 'black': black }
  )
  return <div className={classes} onClick={onClick}>{children}</div>
}

export default BoardCell
