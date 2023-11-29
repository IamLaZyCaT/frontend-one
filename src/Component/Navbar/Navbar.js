import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
  <>
  <nav className='navbar'>
    <ul className='ul'>
        <li className='li act' id='active'>
            <a href='#'>HOME</a>
        </li>
        <li className='li'>
            <a href='#'>OUR SERVICE</a>
        </li>
        <li className='li'>
            <a href='#'>ABOUT US</a>
        </li>
        <li className='li'>
            <a href='#'>CONTACT</a>
        </li>
       
    </ul>
  </nav>
  </>
  )
}

export default Navbar