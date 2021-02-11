import React from 'react'
import SCard from '../SCard/'
import S1 from '../assets/s1.png'
import S2 from '../assets/s2.png'
import S3 from '../assets/s3.png'
import S4 from '../assets/s4.png'

const Services = () => {
  return (
    <div className='services-ctr' id='services'>
      <h2 className='services-title'>
        Services
      </h2>
      <div className='s-card-ctr'>
        <SCard title='Service 1' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' image={S1}/>
        <SCard title='Service 2' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' image={S2}/>
        <SCard title='Service 3' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' image={S3}/>
        <SCard title='Service 4' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' image={S4}/>
      </div>
    </div>
  )
}
export default Services