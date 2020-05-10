import './BoardRow.css'
import React from 'react'

function BoardRow (props) {
  const styles = {
    gridTemplateColumns: `repeat(${props.children.length}, 1fr)`
  }
return (
  <div className='board-row' style={styles}>{
    props.children
  }</div>
)
}

export default BoardRow
