import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.div`
  background: transparent;

  ${(props) =>
    props.size ? css`
      width: 1rem;
      height: 1rem;
    `
    : css`
      width: 2rem;
      height: 2rem;
    `};
`

export default Button
