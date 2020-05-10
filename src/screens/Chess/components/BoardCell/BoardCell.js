import './BoardCell.css'
import React from 'react'
import classNames from 'classnames'

function BoardCell (props) {
  const classes = classNames(
    'board-cell',
    { 'white': !props.black },
    { 'black': props.black }
  )
  return <div className={classes} />
}

export default BoardCell
