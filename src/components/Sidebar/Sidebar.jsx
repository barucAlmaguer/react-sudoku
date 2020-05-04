import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled, { css } from 'styled-components'

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
  transform: translateX(calc(-${ (props) => (props.show ? '0%' : '100%') }));
  h1 {
    margin: 0px;
    text-align: center;
    border-bottom: solid 1px orange;
  }
`

export default (props) => {
  // const menuAnimatedProps = useSpring({
  //   translateX: '100%',
  //   from: { translateX: '0%'}
  // })
  // const opacityProps = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <Sidebar show={props.show}>{props.children}</Sidebar>
  )
}
