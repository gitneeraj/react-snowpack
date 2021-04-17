import React from 'react'
import { Footer, Header } from '../components'

const SiteLayout = (props) => {
  const { children } = props
  return (
    <div className='sitelayout-wrapper'>
      <Header />
      <main className='main main-wrapper'>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
