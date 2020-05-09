import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import styled, { css } from 'styled-components'
import { useClickAway } from 'react-use'

const Sidebar = styled(animated.div)`
  padding: 1rem;
  background-color: #282c34;
  position: absolute;
  border-right: 4px solid orange;
  border-bottom: 4px solid orange;
  /* height: 100%; */
  width: 200px;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  transform: translateX(calc(-${ (props) => (props.show === 'true' ? '0%' : '100%') }));
  h1 {
    margin: 0px;
    text-align: center;
    border-bottom: solid 1px orange;
  }
`

export default (props) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    props.onClickOutside && props.onClickOutside()
  });
  return (
    <Sidebar ref={ref} show={props.show.toString()}>{props.children}</Sidebar>
  )
}
