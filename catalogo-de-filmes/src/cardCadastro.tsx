import React, { useCallback, useMemo, useState, useEffect, useRef } from "react";
import listfilm from './assets/list-film.png';
import './App.css';

function CardCadastro(props) {
  const [tituloFilme, setTituloFilme] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [elenco, setElenco] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");
  const [imagemDoFilme, setImagemDoFilme] = useState(null);
  const [listaFilmes, setListaFilmes] = useState([]);
  const [exibirFilmes, setExibirFilmes] = useState(true);
  const [editarFilmeIndex, setEditarFilmeIndex] = useState(null);
  const [exibirFormulario, setExibirFormulario] = useState(true);
  const numeroFilmesCadastrados = useRef(0);

  useEffect(() => {
    numeroFilmesCadastrados.current = listaFilmes.length;
  }, [listaFilmes]);

  const uploadImage = useCallback((e) => {
    e.preventDefault();
    const novoFilme = {
      titulo: tituloFilme,
      sinopse: sinopse,
      elenco: elenco,
      classificacao: classificacao,
      anoLancamento: anoLancamento,
      imagem: imagemDoFilme,
    };

    if (editarFilmeIndex !== null) {
  
      setListaFilmes((prevFilmes) => {
        const newFilmes = [...prevFilmes];
        newFilmes[editarFilmeIndex] = novoFilme;
        return newFilmes;
      });
      setMensagem(`O filme "${novoFilme.titulo}" foi editado com sucesso.`);
      setEditarFilmeIndex(null);
    } else {
     
      setListaFilmes((prevFilmes) => [...prevFilmes, novoFilme]);
      setMensagem(`O filme "${novoFilme.titulo}" foi cadastrado com sucesso.`);
    }

    
    setTituloFilme("");
    setSinopse("");
    setElenco("");
    setClassificacao("");
    setAnoLancamento("");
    setImagemDoFilme(null);
  }, [tituloFilme, sinopse, elenco, classificacao, anoLancamento, imagemDoFilme, listaFilmes, editarFilmeIndex]);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];

    if (file) {
      setImagemDoFilme(URL.createObjectURL(file));
    }
  }, []);

  const removerFilme = useCallback((index) => {
    const filmeRemovido = listaFilmes[index];
    setListaFilmes((prevFilmes) => {
      const newFilmes = [...prevFilmes];
      newFilmes.splice(index, 1);
      return newFilmes;
    });
    setMensagem(`O filme "${filmeRemovido.titulo}" foi removido.`);
  }, [listaFilmes]);

  const visualizarTodosFilmes = useCallback(() => {
    setExibirFilmes((prevExibirFilmes) => !prevExibirFilmes);
    setEditarFilmeIndex(null);
  }, []);

  const editarFilme = useCallback((index) => {
    const filmeEditavel = listaFilmes[index];
    setTituloFilme(filmeEditavel.titulo);
    setSinopse(filmeEditavel.sinopse);
    setElenco(filmeEditavel.elenco);
    setClassificacao(filmeEditavel.classificacao);
    setAnoLancamento(filmeEditavel.anoLancamento);
    setImagemDoFilme(filmeEditavel.imagem);
    setEditarFilmeIndex(index);
    setExibirFormulario(true); 
  }, [listaFilmes]);

  const cancelarEdicao = useCallback(() => {
    setTituloFilme("");
    setSinopse("");
    setElenco("");
    setClassificacao("");
    setAnoLancamento("");
    setImagemDoFilme(null);
    setEditarFilmeIndex(null);
  }, []);

  const ocultarFormulario = useCallback(() => {
    setExibirFormulario((prevExibirFormulario) => !prevExibirFormulario);
    setEditarFilmeIndex(null);
    setTituloFilme("");
    setSinopse("");
    setElenco("");
    setClassificacao("");
    setAnoLancamento("");
    setImagemDoFilme(null);
  }, []);


  const filmesJSX = useMemo(
    () =>
      listaFilmes.map((filme, index) => (
        <div key={index}>
          <h4>{filme.titulo}</h4>
          <p>Sinopse: {filme.sinopse}</p>
          <p>Elenco: {filme.elenco}</p>
          <p>Classificação: {filme.classificacao}</p>
          <p>Ano de Lançamento: {filme.anoLancamento}</p>
          <img id="imagem-cadastro" src={filme.imagem} alt="Não foi inserido uma imagem" />
          <div className='botoes'>
            <button onClick={() => editarFilme(index)}>Editar</button>
            <button onClick={() => removerFilme(index)}>Remover</button>
          </div>
        </div>
      )),
    [listaFilmes, editarFilme, removerFilme] 
  );

  return (
    <>
      <div className="section-cardCadastro">
        {exibirFormulario && (
          <div className="set-card">
            <form onSubmit={uploadImage}>
              <div className='input-itens'>
                <label>Título</label>
                <input type="text" placeholder='Nome do filme' onChange={(e) => setTituloFilme(e.target.value)} maxLength={25} required value={tituloFilme} />
              </div>
              <div className='input-itens'>
                <label>Sinopse</label>
                <input type="text" placeholder='Sinopse' onChange={(e) => setSinopse(e.target.value)} value={sinopse} />
              </div>
              <div className='input-itens'>
                <label>Elenco</label>
                <input type="text" placeholder='Elenco' onChange={(e) => setElenco(e.target.value)} value={elenco} />
              </div>
              <div className='input-itens'>
                <label>Classificação</label>
                <input type="text" placeholder='Classificação' onChange={(e) => setClassificacao(e.target.value)} value={classificacao} />
              </div>
              <div className='input-itens'>
                <label>Ano de Lançamento</label>
                <input type="date" placeholder='Ano de lançamento' onChange={(e) => setAnoLancamento(e.target.value)} value={anoLancamento} />
              </div>
              <div className='input-itens'>
                <label>Imagem do filme</label>
                <input type="file" name="image" onChange={handleImageChange} />
              </div>
              <div className='botoes'>
                <button type="submit">{editarFilmeIndex !== null ? "Editar" : "Cadastrar"}</button>
                {editarFilmeIndex !== null && (
                  <button type="button" onClick={cancelarEdicao}>Cancelar Edição</button>
                )}
              </div>
            </form>
          </div>
        )}

        <h4>Número de filmes cadastrados: {numeroFilmesCadastrados.current}</h4>
        <div className="section-exibeFilmes">
          <li onClick={visualizarTodosFilmes}>
            <img src={listfilm} alt="" width="20px" />
            Visualizar Filmes Cadastrados
          </li>
          <li onClick={ocultarFormulario}>
            <img src={listfilm} alt="" width="20px" />
            {exibirFormulario ? "Ocultar Formulário" : "Cadastrar Filme"}
          </li>
        </div>
      </div>

      {exibirFilmes && (
        <div className="todos-os-filmes">
          {filmesJSX}
        </div>
      )}
    </>
  );
}

export default CardCadastro;
