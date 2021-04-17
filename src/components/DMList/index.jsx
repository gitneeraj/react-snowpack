import React from 'react'
import { useSelector } from 'react-redux'

import { Cancel } from '..'
import './index.scss'

const DMList = () => {
  const dmList = useSelector(state => state.dmlist.sessions)

  return (
    <div className='dm-list-wrapper'>
      <ul>
        {dmList.map((dm, idx) => (
          <li key={dm + idx}>
            <img
              src={`images/sessions/${dm.key}.png`}
              alt={dm.name}
              height={64}
            />
            <span>{dm.name}</span>
          </li>
        ))}
      </ul>
      <Cancel />
    </div>
  )
}

export default DMList
