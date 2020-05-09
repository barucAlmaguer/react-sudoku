import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Button from './Button'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
  let match = useRouteMatch({ path: props.to, activeOnlyWhenExact: true })
  return (
    <Button primary={match} {...props}>
      <Link to={props.to} style={{ color: 'white', textDecoration: 'none' }}>
        {props.label}
      </Link>
    </Button>
  )
}