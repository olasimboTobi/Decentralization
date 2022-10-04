import React, {useState, useEffect} from 'react'
import {Routes,Route, useNavigate} from "react-router-dom"
import {data} from "./data/data"
import Register from "./components/Register"
import FormPage from "./components/FormPage"
import Layout from "./components/Layout"


function App() {

  const navigate = useNavigate();

  const register = data
  //console.log(registers)

  //useEffect(()=>setRegisters(data),[])

  const handleClick = () => ( navigate("/register"))

  const handleLink = (id)=> {
     navigate(`/form-page/${id}`)
     
  }



  return (
    <Routes>
      <Route path="/" exact element={<Layout onToggled={handleClick} />}/>
      <Route path="register" element= { <Register registers={register} onLink={handleLink}/>}/>
      <Route path="form-page/:id" element={ <FormPage/>}/>
    </Routes>
      
  );
}

export default App;
