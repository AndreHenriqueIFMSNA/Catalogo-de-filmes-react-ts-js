import { useCallback, useMemo, useState, useEffect, useRef } from "react"
import listfilm from './assets/list-film.png'
import './App.css'





function CardCadastro(){
    const [tituloFilme, setTituloFilme] = useState("");
    const [imagemDoFilme, setImagemDoFilme] = useState (null);
    const [listaFilmes, setListaFilmes] = useState([]);
    const [mostrarTodosFilmes, setMostrarTodosFilmes] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const numeroFilmesCadastrados = useRef(0);



    const FilmesClick = () => {
      setMostrarTodosFilmes(true);
    }

    useEffect(() => {
      numeroFilmesCadastrados.current = listaFilmes.length;
    }, [listaFilmes]);
    
    function uploadImage(e) {
      e.preventDefault();
      const novoFilme = {
        titulo: tituloFilme,
        imagem: imagemDoFilme,
      };
  
    setListaFilmes([novoFilme]);
    setMensagem(`O filme "${novoFilme.titulo}" foi cadastrado com sucesso.`)
    // Limpar campos após salvar

    setTituloFilme("");
    setImagemDoFilme(null);
    }

    function handleImageChange(e) {
      const file = e.target.files[0];
    

      if(file){
        setImagemDoFilme(URL.createObjectURL(file));
      }
    }

    const removerFilme = useCallback(
      (index) => {
        const filmeRemovido = listaFilmes[index];
        setListaFilmes([]);
        setMensagem(`O filme "${filmeRemovido.titulo}" foi removido.`);
      },
      [listaFilmes]
    );


    const filmesJSX = useMemo(
      () =>
      listaFilmes.map((filme, index) => (
        <div key={index}>
          <h4>{filme.titulo}</h4>
          <img id="imagem-cadastro" src={filme.imagem} alt={`Imagem ${filme.titulo}`}/>
          <button onClick={() => removerFilme(index)}>Remover</button>
        </div>
      )),
      [listaFilmes, removerFilme]
    );

    return(
    <>
      <div className="section-cardCadastro">
        <div className="set-card">
          <form onSubmit={uploadImage}>
              <div className='input-itens'>
                <label>Título</label>
                <input type="text" placeholder='Nome do filme' onChange={(e) => setTituloFilme(e.target.value)} maxLength={25} required value={tituloFilme}/>
              </div>
              
              <div className='input-itens'>
                <label>Imagem do filme</label>
                <input type="file" name="image" onChange={handleImageChange}/> 
              </div>

              <input type="submit" value="Salvar"/>

          </form>
      </div>
        <div className="exibe-card">{mensagem ? <p>{mensagem}</p> : filmesJSX}</div>
      </div>
      <div className="section-exibeFilmes">
        <li onClick={FilmesClick}>
          <img src={listfilm} alt="" width="20px" />
           Todos os filmes
           <h4>Número de filmes cadastrados: {numeroFilmesCadastrados.current}</h4>
        </li>
      </div>
          </>
    );
}

export default CardCadastro