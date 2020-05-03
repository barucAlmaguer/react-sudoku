import React from 'react'
import styled, { css } from 'styled-components'

interface SpacerProps {
  size: "small" | "big"
}

const Button = styled.div`
  background: transparent;

  ${(props: SpacerProps) =>
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
