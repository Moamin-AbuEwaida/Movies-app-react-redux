import React from 'react'
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div>Movie App</div>
      <div>
        @{ new Date().getFullYear() }, <span>All Rights are Reserved</span>
      </div>
    </div>
  )
}

export default Footer