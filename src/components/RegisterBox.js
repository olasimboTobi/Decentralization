import React from 'react'
import "./RegisterBox.css"

function RegisterBox({ id, url, title, onLink}) {
  return (
    <div className="registerBox" onClick={(e)=> onLink(id)}>
       <img src={url} alt={title} className="register--logo"/>
       <h2 className="register--title">{title}</h2>
    </div>
  )
}

export default RegisterBox