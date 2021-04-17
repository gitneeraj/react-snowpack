import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='dm-list'>
        <NavLink to='/dm-list' activeClassName='selected'>
          <FontAwesomeIcon icon={faLaptop} className='faIcons' />
        </NavLink>
      </div>
      <div className='power-options'>
        <NavLink to='/power' activeClassName='selected'>
          <FontAwesomeIcon icon={faPowerOff} className='faIcons' />
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
