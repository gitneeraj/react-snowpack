import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='header-wrapper'>
      <div id='settings'>
        <FontAwesomeIcon icon={faCog} className='faIcons' />
      </div>
      <div id='system-info'>system info</div>
    </header>
  )
}

export default Header
