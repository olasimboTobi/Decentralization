import React from 'react'
import './Forex.css'
import Rate from './Rate'

function Forex() {
  return (
    <div className='forex-container'>
       <Rate url="dogecoin/" logo="https://cronocrypto.com/index_files/74.png" forexname="Dogecoin" abbrev="DOGE"  amount={0.064057} percent={0.52}/> 
       <Rate url="tether/"   logo="https://cronocrypto.com/index_files/825.png" forexname="Tether" abbrev="USDT" amount='1.00' percent={0.01}/> 
       <Rate url="ethereum/" logo="https://cronocrypto.com/index_files/1027.png" forexname="Ethereum" abbrev="ETH"  amount='1,718.34' percent={1.02}/> 
       <Rate url="bnb/"      logo="https://cronocrypto.com/index_files/1839.png" forexname="BNB"  abbrev ="BNB" amount={294.93} percent={1.65}/> 
       <Rate url="cardano/"  logo="https://cronocrypto.com/index_files/2010.png" forexname="Cardano"  abbrev= "ADA" amount={0.513177} percent={3.86}/> 
       <Rate url="algorand/" logo="https://cronocrypto.com/index_files/4030.png" forexname="Algorand"  abbrev= "ALGO" amount={0.322441} percent={1.42}/> 
       <Rate url="bitcoin/"  logo="https://cronocrypto.com/index_files/1.png" forexname="Bitcoin" abbrev= "BTC"  amount='21,353.22' percent={3.14}/> 
    </div>
  )
}

export default Forex