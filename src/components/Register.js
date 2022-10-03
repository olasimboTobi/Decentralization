import React from 'react'
import "./Register.css"
import RegisterBox from './RegisterBox'


function Register({registers, onLink}) {

    const registerElement = registers.map(register =>{
        return(
                <RegisterBox 
                    key={register.id}
                    id={register.id}
                    url= {register.url}
                    title={register.title}
                    onLink={onLink}
                />
            
        )
        })

    return (
        <div className="reg--container">
           <div className="register">
                <h2 className="register-header">Registry</h2>
                {/* <div className="register--flex"> */}
                <div className="register--flex"  style={{'textDecoration': 'none'}}>{registerElement}</div>
                {/* </div> */}
           </div>
        </div>
        
    )
}

export default Register