import { useState } from 'react'
import CardCadastro from './cardCadastro'
import CardExibir from './cardExibir'
import logo from './assets/logo250ajustado.png'
import listfilm from './assets/list-film.png'
import addLogo from './assets/add.png'
import './App.css'



function App() {

  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [mostrarTodosFilmes, setMostrarTodosFilmes] = useState(false);

  const CadastrarClick = () => {
    // Altera o estado para exibir a div de cadastro
    setMostrarCadastro(true);
  };

  const FilmesClick = () => {

    setMostrarTodosFilmes(true);
  }





  return (
    <>
      <div className="container">
        <div className="header">
          <div className="nav">
            <img src={logo} alt="" width='60px' id='img-logo'/>
              <div className="nav-list">
              <li onClick={CadastrarClick}>
                <img src={addLogo} alt="" width="20px" />
                Cadastrar
              </li>
              <li onClick={FilmesClick}>
                <img src={listfilm} alt="" width="20px" />
                Todos os filmes
              </li>
            </div>
          </div>
        </div>
      </div>
      {mostrarCadastro && <CardCadastro />}
      {mostrarTodosFilmes && <CardExibir />}
    </>
  );

}

export default App
