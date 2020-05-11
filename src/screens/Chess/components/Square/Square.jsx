import './Square.css'
import React from 'react'
import classNames from 'classnames'

function Square({ black, children }) {
  const classes = classNames(
    'board-square',
    { 'white': !black },
    { 'black': black }
  )
  return <div className={classes}>{children}</div>
}

export default Square
