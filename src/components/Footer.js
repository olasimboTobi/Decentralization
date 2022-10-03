import React from 'react'
import './Footer.css'

function Footer({logo}) {
  return (
    <div className="footer">
        <img src={logo} alt='logo' className='footer--logo'/>
        <div className='footer--text'>
            <h1 className='footer--title'>Everything You Need</h1>
            <p className='footer--description'>Cryptocurrency wallets provide users with a digital solution  for securely storing 
                and <br/> managing blockchain assets and  cryptocurrencies. These wallets allow users 
                to <br/> spend, receive, and trade cryptocurrencies.
            </p>
        </div>
    </div>
  )
}

export default Footer