import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const StyledMenuButton = styled(Button)`
  position: absolute;
  width: 40px;
`

const MenuButton = (props) => {
  const actionToIconMap = { OPEN: faBars, CLOSE: faTimes }
  return (
    <StyledMenuButton { ...props } onClick={() => props.onClick(props.action)}>
      <FontAwesomeIcon icon={actionToIconMap[props.action]} />
    </StyledMenuButton>
  )
}

MenuButton.propTypes = {
  action: PropTypes.oneOf(['OPEN', 'CLOSE'])
}

MenuButton.defaultProps = {
  action: 'OPEN'
}

export default MenuButton
