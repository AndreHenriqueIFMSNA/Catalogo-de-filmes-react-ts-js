import { useState } from "react"
import './cardExibir'
import './App.css'





function CardCadastro(){
    const [tituloFilme, setTituloFilme] = useState("");
    const [imagemDoFilme, setImagemDoFilme] = useState (null);

   function uploadImage(e){
      e.preventDefault();
    }

    function handleImageChange(e) {
      const file = e.target.files[0];
  
      if(file){
        setImagemDoFilme(URL.createObjectURL(file));
      }
    }

    return(
    <>
      <div className="section-cardCadastro">
      
      <div className="set-card">
          <form onSubmit={uploadImage}>
              <div className='input-itens'>
                <label>Título</label>
                <input type="text" placeholder='Nome do filme' onChange={(e) => setTituloFilme(e.target.value)} maxLength={25} required/>
              </div>
              
              <div className='input-itens'>
                <label>Imagem do filme</label>
                <input type="file" name="image" onChange={handleImageChange}/> 
              </div>

              <input type="submit" value="Salvar"/>

          </form>
      </div>
      <div className="exibe-card">
        <h4>
          {tituloFilme}
        </h4>
      <h4>
        <img id="imagem-cadastro" src={imagemDoFilme}/>
      </h4>
      

      </div>
    </div>
    </>
    )
}

export default CardCadastro