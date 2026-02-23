import React from 'react'
import logo from '../logo/pokemon-logo-png-1421.png'

export default function Header() {
  return (
    <div>
        <header className='header'>
            <img src={logo} alt="Pokemon Logo" className="bgImage" />
        </header>
    </div>
  )
}
