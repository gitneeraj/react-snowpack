import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.scss'

const Cancel = () => {
  return (
    <NavLink to='/' className='go-back'>
      <FontAwesomeIcon icon={faTimesCircle} className='faIcons' />
      <span>Cancel</span>
    </NavLink>
  )
}

export default Cancel
