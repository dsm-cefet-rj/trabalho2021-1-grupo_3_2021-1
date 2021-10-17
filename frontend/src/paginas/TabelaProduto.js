import React, {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteProdutoServer, fetchProdutos, selectAllProdutos} from '../paginas/utilitarios/ProdutosSlice'

export default function ListagemProduto(props){
  
  const produtos = useSelector(selectAllProdutos)
  const status = useSelector(state => state.produtos.status);
  const error = useSelector(state => state.produtos.error);

  const dispatch = useDispatch();


  function handleClickExcluirProduto(id){
        dispatch(deleteProdutoServer(id));
        
  }

   useEffect(() => {
        if (status === 'not_loaded' ) {
            dispatch(fetchProdutos())
        }else if(status === 'failed'){
            setTimeout(()=>dispatch(fetchProdutos()), 5000);
        }
    }, [status, dispatch])
    
  
  let tabelaProdutos = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    tabelaProdutos = <TabelaProdutos produtos={produtos} onClickExcluirProduto={handleClickExcluirProduto} />;
  }else if(status === 'loading'){
    tabelaProdutos = <div>Carregando os produtos...</div>;
  }else if(status === 'failed'){
    tabelaProdutos = <div>Error: {error}</div>;
  }

  return (
            <>
              <Link to="/produtos/novo"><button id="Novo Produto" name="btn_novo_produto">Novo Produto</button></Link><br/><br/>
              {tabelaProdutos}
            </>
        );
}

export const LinhaProduto = (props) => {
    if(props != null && props.produto != null && props.produto.id != null){
      return(
              <tr><td>{props.produto.preco}</td>
              <td>{props.produto.name}</td>
              <td>{props.produto.desc}</td>
              <td>{props.produto.categoria}</td>
              
              <td><Link to={`/produtos/${props.produto.id}`}><button>Alterar</button></Link></td>
              <td><button id="excluir_produto" name="excluir_produto" onClick={() => props.onClickExcluirProduto(props.produto.id)}>Excluir</button></td>
            </tr>
      );
    }else{
      return(<tr><td colSpan={3}>Não foi possível exibir o produto.</td></tr>)
    }
}

export function TabelaProdutos(props){
    if(props != null && props.produtos != null && props.produtos.length > 0){
      return(
          <table border="1">
              <tbody>
              <tr>
        <th> Data de Nascimento</th>
        <th> Nome </th>
        <th> Tipo </th>
        <th>Peso</th>
        <th>Alterar</th>
        <th>Excluir</th>
        
    </tr>
                {props.produtos.map((produto) => <LinhaProduto key={produto.id} produto={produto} 
                onClickExcluirProduto={props.onClickExcluirProduto} />)}
              </tbody>
          </table>
      );
    }else{
      return(<div>Não existem produtos a serem exibidos.</div>)
    }
}

