import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Mustafa Dar</strong>,
        <br />
        A Real Estate Professional with <br /> Keller Williams UK
   
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
