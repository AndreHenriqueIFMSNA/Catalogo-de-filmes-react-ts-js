import { useState } from 'react'
import CardCadastro from './cardCadastro'
import logo from './assets/logo250ajustado.png'
import addLogo from './assets/add.png'
import './App.css'



function App() {

  const [mostrarCadastro, setMostrarCadastro] = useState(false);


  const CadastrarClick = () => {
    // Altera o estado para exibir a div de cadastro
    setMostrarCadastro(true);
  };


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="nav">
            <img src={logo} alt="" width='60px' id='img-logo'/>
              <div className="nav-list">
              <li onClick={CadastrarClick}>
                <img src={addLogo} alt="" width="20px" />
                Cadastrar Filmes
              </li>
            </div>
          </div>
        </div>
      </div>
      {mostrarCadastro && <CardCadastro />}
    </>
  );

}

export default App
