import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  primary?: Boolean
}

const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  height: 40px;

  ${(props: ButtonProps) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

export default Button
