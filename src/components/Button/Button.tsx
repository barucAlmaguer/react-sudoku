import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  primary?: Boolean
  children?: string | React.ElementType
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props: ButtonProps) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

export default Button
