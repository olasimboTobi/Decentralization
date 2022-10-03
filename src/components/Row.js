import React from 'react'
import './Row.css'
import { useNavigate, Link} from "react-router-dom";

function Row({logo, text, onToggled}) {

  const navigate = useNavigate();
  
  return (
    <div className="row--posters">
      <div className="row--poster">
        <img src={logo} alt={text} className="logo--img"/>
        <div className="row--grp">
          <h3 className="row--text">{text}</h3>
          <button className="row--btn" onClick={onToggled}>CHOOSE</button>
        </div>
      </div>
        
    </div>
  )
}

export default Row