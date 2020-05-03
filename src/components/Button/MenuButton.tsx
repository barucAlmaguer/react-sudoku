import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default (props: any) => {
  return (
    <Button { ...props }>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  )
}