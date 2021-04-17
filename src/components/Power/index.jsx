import { faBed, faPowerOff, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { Cancel } from '..'
import './index.scss'

const Power = () => {
  return (
    <div className='power-outer-wrapper'>
      <div className='power-wrapper'>
        <div className='poweroff power-options'>
          <FontAwesomeIcon
            icon={faPowerOff}
            id='poweroff'
            className='faIcons'
          />
          <span>Shutdown</span>
        </div>
        <div className='restart power-options'>
          <FontAwesomeIcon icon={faRedo} id='restart' className='faIcons' />
          <span>Restart</span>
        </div>
        <div className='sleep power-options'>
          <FontAwesomeIcon icon={faBed} id='sleep' className='faIcons' />
          <span>Sleep</span>
        </div>
      </div>

      <Cancel />
    </div>
  )
}

export default Power
