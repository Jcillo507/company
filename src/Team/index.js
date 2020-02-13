import React from 'react'
import PCard from '../PCard/'
import './team.scss'
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'
import P4 from '../assets/p4.png'

const Team =()=>{
  return(
   
    <div className='team-wrapper' id='team'>
      <h2 className='team-title'>
        Meet the Team
        </h2>
      <p className='team-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className='team-ctr'>
      <PCard name='CEO' title='CEO' email='CEO@company.com'image={P1}/>
      <PCard name='CTO' title='CTO' email='CTO@company.com' image={P2}/>
      <PCard name='COO' title='COO' email='COO@company.com' image={P3}/>
      <PCard name='CFO' title='CFO' email='CFO@company.com' image={P4}/>
    </div>
    </div >
  )
}

export default Team