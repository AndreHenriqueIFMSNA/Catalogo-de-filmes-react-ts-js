import { useState } from 'react'
import logo from './assets/logo250ajustado.png'
import addLogo from './assets/add.png'
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="nav">
            <img src={logo} alt="" />
           
            <li> <img src={addLogo} alt=""  width='20px'/>Cadastrar</li>
            <li>Todos os filmes</li>
          </div>
        </div>
      <hr />
        <div className="section">
          <p>{}</p>
        </div>
        
      </div>
    </>
  )
}

export default App
