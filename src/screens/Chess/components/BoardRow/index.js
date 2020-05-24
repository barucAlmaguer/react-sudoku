import React from 'react'
import styled from 'styled-components'

export const BoardRow = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(${p => p.children.length}, 1fr);
`
