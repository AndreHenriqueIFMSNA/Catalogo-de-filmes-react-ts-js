import { useState } from 'react';
import CardCadastro from './cardCadastro';
import logo from './assets/logo250ajustado.png';
import addLogo from './assets/add.png';
import './App.css';

function App() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [todosOsFilmes, setTodosOsFilmes] = useState(false);

  const CadastrarClick = () => {
    setMostrarCadastro(true);
  };

  const VisualizarTodosFilmesClick = () => {
    setTodosOsFilmes((prevTodosOsFilmes) => !prevTodosOsFilmes);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="nav">
            <img src={logo} alt="" width='60px' id='img-logo'/>
            <br />
            <div className="nav-list">
              <li onClick={CadastrarClick}>
                <img src={addLogo} alt="" width="20px" />
                MENU
              </li>
            </div>
          </div>
        </div>
      </div>
      {mostrarCadastro && <CardCadastro VisualizarTodosFilmesClick={VisualizarTodosFilmesClick} todosOsFilmes={todosOsFilmes} />}
    </>
  );
}

export default App;
