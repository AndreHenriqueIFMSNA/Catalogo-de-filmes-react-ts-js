import { useState } from 'react'
import logo from './assets/logo250ajustado.png'
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="nav">
            <img src={logo} alt="" />
            <li>Cadastrar</li>
            <li>Todos os filmes</li>
          </div>
        </div>
        <hr />
        
      </div>
    </>
  )
}

export default App
