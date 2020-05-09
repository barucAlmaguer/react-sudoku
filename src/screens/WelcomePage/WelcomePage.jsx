import React from 'react'
import styled, { css } from 'styled-components'
const WelcomePage = styled.div`
text-align: center;
`
export default () => (
  <WelcomePage>
    <h1>Welcome to React games!</h1>
    <h2>Click on the side menu to select a game.</h2>
  </WelcomePage>
)
