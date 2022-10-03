import React from 'react';
import './Header.css'

function Header({logo,onToggled}) {
  return (
    <div className='header'>
       <div className='header--badge'>
        <img src={logo} alt="badge" className='img--badge' />
        <div className='header--content'>
            <h1 className='content--title'>DECENTRALIZED PLATFORM</h1>
            <p className='content--text'>WALLET</p>
        </div>
       </div>
       <button className='btn--header' onClick={onToggled}>RESOLVE</button>
    </div>
  )
}

export default Header