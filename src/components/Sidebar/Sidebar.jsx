import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import styled, { css } from 'styled-components'
import { useClickAway } from 'react-use'

const StyledSidebar = styled(animated.div)`
  padding: 1rem;
  background-color: #282c34;
  position: absolute;
  /* height: 100%; */
  width: 200px;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  transform: translateX(calc(-${ (props) => (props.show === 'true' ? '0%' : '100%') }));
  ${props => props.show === 'true' && css`
    box-shadow: 4px 4px 0px 0px orange;
  `}
  h1 {
    margin: 0px;
    text-align: center;
    border-bottom: solid 1px orange;
  }
`

export const Sidebar = (props) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    props.onClickOutside && props.onClickOutside()
  });
  return (
    <StyledSidebar ref={ref} show={props.show.toString()}>{props.children}</StyledSidebar>
  )
}

export const SidebarOptions = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-top: 1rem;
  width: 100%;
`