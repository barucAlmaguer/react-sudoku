import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  height: 40px;
  &:hover {
    color: white;
  }
  &:active {
    font-weight: bold;
    color: wheat;
  }
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
      &:hover {
        font-weight: bold;
      }
      &:active {
        font-weight: bolder;
        color: wheat;
      }
    `};
`

export default Button
