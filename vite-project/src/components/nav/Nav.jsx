import React from 'react'
import logo1 from '../../images/navlogo1.svg'
import logo2 from '../../images/navlogo2.svg'
import logo3 from '../../images/navlogo3.svg'


import './Nav.css'

function Nav() {
  return (
    <div className="container">
    <nav>
        <div className="logos">
            <img src={logo1} alt="logo image" />
            <img src={logo2} alt="logo image" />
            <img src={logo3} alt="logo image" />
        </div>
        <input className='nav-input' type="text"  placeholder='Search'/>
        <ul>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Nav