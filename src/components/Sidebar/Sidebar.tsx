import React from 'react'
import styled, { css } from 'styled-components'

interface SidebarProps {
  hidden: Boolean
}

const Sidebar = styled.div`
  padding: 1rem;
  background-color: #282c34;
  position: absolute;
  border-right: 4px solid orange;
  height: 100%;
  ${(props: SidebarProps) =>
    props.hidden && css`
      transform: translateX(calc(-100% + 4px));
    `};
`

export default Sidebar
