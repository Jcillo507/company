import React from 'react'
import SCard from '../SCard/'
import './services.scss'

const Services = () => {
  return (
    <div className='services-ctr'>
      <h2>
        Services
      </h2>
      <div className='s-card-ctr'>
        <SCard title='hello' desc='working' />
        <SCard title='hello1' desc='working1' />
        <SCard title='hello2' desc='working2' />
        <SCard title='hello12' desc='working12' />
      </div>
    </div>
  )
}
export default Services