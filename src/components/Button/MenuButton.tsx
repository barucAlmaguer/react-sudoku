import React from 'react'
import Button from './Button'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MenuButton = styled(Button)`
  width: 40px;
`

export default (props: any) => {
  return (
    <MenuButton { ...props }>
      <FontAwesomeIcon icon={faBars} />
    </MenuButton>
  )
}