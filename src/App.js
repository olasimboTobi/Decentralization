import React, {useState, useEffect} from 'react'
import {Routes,Route, useNavigate} from "react-router-dom"
import {data} from "./data/data"
import Register from "./components/Register"
import FormPage from "./components/FormPage"
import Layout from "./components/Layout"


function App() {

  const navigate = useNavigate();

  const register = data

  const handleClick = () => ( navigate("/register"))

  const handleLink = (title, id)=> {
    const originalText = `${title}`
    const newTitle = originalText.replace(/ /g, "").toLowerCase();
    navigate(`/dapp/wallet/apps/${id}/${newTitle}`)
    
  }



  return (
    <Routes>
      <Route path="/" exact element={<Layout onToggled={handleClick} />}/>
      <Route path="register" element= { <Register registers={register} onLink={handleLink}/>}/>
      <Route path="dapp/wallet/apps/:id/:newTitle" element={ <FormPage/>}/>
    </Routes>
      
  );
}

export default App;
