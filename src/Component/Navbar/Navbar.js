import React from 'react';
import './Navbar.css';

const Navbar = () => {
   
  return (
  <>
  <nav className='navbar'>
    <ul className='ul'>
        <li className='li act' id='active'>
            <a href='#home'>HOME</a>
        </li>
        <li className='li'>
            <a href='#service'>OUR SERVICE</a>
        </li>
        <li className='li'>
            <a href='#about'>ABOUT US</a>
        </li>
        <li className='li'>
            <a href='#contact'>CONTACT</a>
        </li>
       
    </ul>
  </nav>
  </>
  )
}

export default Navbar