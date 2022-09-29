import React from 'react'
import './Nav.css';
import TalentIcon from '../../asset/logo.png'

function NavBar() {
  return (
    <header>
      <img src={TalentIcon} className="logo" alt='log' />
      <nav className='nav'>
        <button className='btn-secondary'>ENG</button>
        <button className='btn-secondary active'>FR</button>
      </nav>
    </header>
    
  )
}

export default NavBar
