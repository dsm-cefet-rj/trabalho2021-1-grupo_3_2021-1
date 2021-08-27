





import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Produto from './Produto';

import {addProdutoServer, updateProdutoServer} from './ProdutosSlice';

function CadProduto(props) {
  const produtos = useSelector(state => state.produtos.produtos)
  const dispatch = useDispatch()
  let { id } = useParams();
  id = parseInt(id);

  const [produto, setProduto] = useState(
    id ? 
        produtos.filter((p) => p.id === id)[0] ?? new Produto({})
       : new Produto({}));
  
  const [actionType, ] = useState(
    id ? 
      produtos.filter((p) => p.id === id)[0] 
      ? 'produtos/updateProdutoServer'
      : 'produtos/addProdutoServer'
   : 'produtos/addProdutoServer');
  const history = useHistory();

  
  function handleInputChange(e) {
    setProduto(new Produto({...produto, [e.target.name]: e.target.value}));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(actionType === 'produtos/addProdutoServer'){
      dispatch(addProdutoServer(produto));
    }else if(actionType === 'produtos/updateProdutoServer'){
      dispatch(updateProdutoServer(produto))
    }
    history.push('/produtos');
  }

  useEffect(() =>  {
    document.title = `Produto: ${produto.nome}`;
    return () => {document.title = 'PragmaPM'}
  }, [produto.nome]);

  return (
    <>
    <form onSubmit={handleSubmit} >
      

        <legend>
          <h3 className="">Oque deseja compartilhar?</h3>
        </legend>

        
         
      <legend className="text-center">Cadastro de pedido - Servicos</legend>
      <div className="mb-3 col-sm-4">
        <select
          name="item-categoria"
          className="form-select"
          form="form-cadastro"
        >
          <option defaultValue hidden>
            Escolha uma categoria
            name="categoria" value={produto.categoria} onChange={handleInputChange}
          </option>
          <option value="ferramenta">Ferramenta</option>
          <option value="eletro">Eletrodoméstico</option>
          <option value="veiculo">Veículo</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="nome-item" className="form-label">
        Nome:&nbsp;
        </label>
        <input
          type="text"
          className="form-control"
          id="item-nome"
          placeholder="martelo, chave de fenda, furadeira..."
          name="nome" value={produto.nome} onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="item-img" className="form-label">
          Imagem ilustrativa:&nbsp;
        </label>
        <input
          className="form-control form-control-sm"
          type="file"
          id="item-img"
          aria-describedby="imageHelp"
        />
        <div id="imageHelp" className="form-text">
          A imagem será usada apenas como referência para os outros usuários
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="item-descricao" className="form-label">
          Descrição:&nbsp;
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Adicione uma descrição"
          name="desc" value={produto.desc} onChange={handleInputChange}
        ></textarea>
      </div>
      <input type="submit" value="Enviar" />
      <input type="button" value="Cancelar" onClick={()=>history.goBack()}/>
    
  </form>
  </>
  );
    
}

export {CadProduto};

