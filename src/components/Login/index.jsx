/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Login = () => {
  return (
    <div className='login-wrapper'>
      <img src='images/profile.jpg' alt='user avatar' />
      <input type='text' placeholder='Username' autoFocus />
      <input type='password' placeholder='Password' />
      <button type='button'>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </button>
    </div>
  )
}

export default Login
