import React from 'react'
import './Rate.css'
import {TiArrowSortedUp} from 'react-icons/ti'
import {Link, useNavigate} from 'react-router-dom'


function Rate({logo,forexname,abbrev, amount, percent , url}) {
  const navigate = useNavigate();
  let link = "https://coinmarketcap.com/currencies/" + url
  function handleLink(e)
  {
    //console.log(e)
     (navigate(e))
  }
  return (
      <div className="rate" style={{marginLeft: "30px"}} onClick={() => handleLink(link)}>
        <div className="rate--img">
            <img src={logo} alt={forexname} className='rate--logo'/>
            <a href={link} style={{textDecoration: 'none', color: "black"}}>
            <div className="rate--description">
              <div className="rate--forexname">{forexname}</div>
              <div className="rate--abbrev">{abbrev}</div>
            </div>
            </a>
          <div className="rate--money">
          <a href={link} style={{textDecoration: 'none', color: 'black'}}>
            <div className='rate--amount'>${amount}</div>
            <div className="rate--percent"><TiArrowSortedUp className='arrow--icon'/> {percent}%</div>
          </a>
          </div>
          
        </div>
      </div>
  )
}


export default Rate










