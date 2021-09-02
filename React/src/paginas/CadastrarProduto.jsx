import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {produtoSchema} from './ProdutoSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import {addProdutoServer, updateProdutoServer, selectProdutosById} from './ProdutosSlice';

function CadProduto(props) {
  const status = useSelector(state => state.produtos.status)
  const error = useSelector(state => state.produtos.error)
  const dispatch = useDispatch()
  let { id } = useParams();
  const produtoFound = useSelector(state => selectProdutosById(state, id))
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(produtoSchema)
  });
  id = parseInt(id);

  const [produtoOnLoad] = useState(
    id ? produtoFound ?? produtoSchema.cast({}): produtoSchema.cast({}));
  
  const [actionType, ] = useState(
    id ? produtoFound 
      ? 'produtos/updateProdutoServer'
      : 'produtos/addProdutoServer'
   : 'produtos/addProdutoServer');
  const history = useHistory();

  
  function onSubmit(produto){
    if(actionType === 'produtos/addProdutoServer'){
      dispatch(addProdutoServer(produto));
    }else if(actionType === 'produtos/updateProdutoServer'){
      dispatch(updateProdutoServer({...produto, id: produtoFound.id}))
    }
    history.push('/produtos');
  }
  useEffect(() =>  {
    if(status === 'saved'){
      history.push('/produtos');
    }
  }, [history, status]);
/*
  useEffect(() =>  {
    document.title = `Produto: ${produto.nome}`;
    return () => {document.title = 'PragmaPM'}
  }, [produto.nome]);*/

  return (
    <>
    <div>{error}</div>
    <form onSubmit={handleSubmit(onSubmit)} >
      

        <legend>
          <h3 className="">Oque deseja compartilhar?</h3>
        </legend>

        
         
      <legend className="text-center">Cadastro de pedido - Servicos</legend>
      <div className="mb-3 col-sm-4">
        <select
         
          className="form-select"
          form="form-cadastro"
          name="categoria" 
          defaultValue={produtoOnLoad.categoria} ref={register}
        
          
        >
          
          <option defaultValue hidden>
            Escolha uma categoria
            
          </option>
          <option value="ferramenta">Ferramenta</option>
          <option value="eletro">Eletrodoméstico</option>
          <option value="veiculo">Veículo</option>
          <option value="outro">Outro</option>
        </select>
        <span>{errors.categoria?.message}</span>
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
          name="name" defaultValue={produtoOnLoad.name} ref={...produto(name)}  />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
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
          name="desc" defaultValue={produtoOnLoad.desc} ref={...produto(desc)}
          
        ></textarea>
        <span>{errors.desc?.message}</span>
      </div>
      <input type="submit" value="Enviar" />
      <input type="button" value="Cancelar" onClick={()=>history.goBack()}/>
    
  </form>
  </>
  );
    
}

export {CadProduto};

