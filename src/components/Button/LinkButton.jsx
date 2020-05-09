import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Button from './Button'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useHover } from 'react-use'

export default (props) => {
  let match = useRouteMatch({ path: props.to, activeOnlyWhenExact: true })
  const linkThingy = (hovered) => (
    <Link to={props.to} style={{ color: 'white', textDecoration: hovered ? 'underline' : 'none' }}>
      {props.label}
    </Link>
  )
  const [hoverableLinkThingy, _] = useHover(linkThingy)
  return (
  <Button primary={match} {...props}>{hoverableLinkThingy}</Button>
  )
}