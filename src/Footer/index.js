import React from 'react'
import { Route } from 'react-router-dom'
import './footer.scss'

const Footer  = ()=>{
return(
  <div className='footer-ctr'>
    <Route>
      company logo goes here
    </Route>
    <h3>address</h3>
    <Route>
      like to voip call
    </Route>
    <h4>email address</h4>
    <h5>copyright 2020</h5>
  </div>
)
}

export default Footer