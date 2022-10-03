import React from 'react'
import "./FormPage.css"
import {HiOutlineLockClosed} from 'react-icons/hi'
import {FiArrowRightCircle} from 'react-icons/fi'
import {useParams} from "react-router-dom"

function FormPage({registers}) {
  const id = useParams()
  const data = registers.find(reg => reg.id == id)
  //console.log(data)
  return (

        <div className="form--container">
        <form className="form">
            <div className="form--header">
                <div className="form--symbol"><img widht="30" height="30" src={data.url}/></div>
                <div className="form--title">Import your {data.title}</div>
            </div>
            <div className="form--content">
                <div className="form--input--label">
                    <label className="form--label">Wallet Name:</label>
                    <div className="form--input--icon">
                        <HiOutlineLockClosed className="form--icon"/>
                        <input value={data.title} className="form--input"/>
                    </div>
                </div>

                <div className="form--textarea--label">
                    <label className="form--label2">Recovery Phrase:</label>
                    <div className="form--textarea--icon">
                        <HiOutlineLockClosed className="form--icon2"/>
                        <textarea placeholder="Enter your Recovery Phrase" className="form--textarea"  required/>
                    </div>
                    <p className="form--textarea--text">Typically 12 (sometimes 24) words separated by single spaces</p>
                </div>
            </div>
            <button className="form--btn">PROCEED <FiArrowRightCircle className="form--btn--icon"/></button>
            <button type='button' className="form--btn--cancel">Cancel</button>
        </form>
    </div>
 
        

    
    
  )
}

export default FormPage