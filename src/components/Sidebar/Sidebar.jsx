import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled, { css } from 'styled-components'

const Sidebar = styled(animated.div)`
  padding: 1rem;
  background-color: #282c34;
  position: absolute;
  border-right: 4px solid orange;
  height: 100%;
  z-index: 1;
  transform: translateX(calc(-${ (props) => {
    return props.hidden ? '100% + 4px' : '0%'
  } }));
`

export default (props) => {
  // const menuAnimatedProps = useSpring({
  //   translateX: '100%',
  //   from: { translateX: '0%'}
  // })
  // const opacityProps = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <Sidebar hidden={props.hidden}>{props.children}</Sidebar>
  )
}
