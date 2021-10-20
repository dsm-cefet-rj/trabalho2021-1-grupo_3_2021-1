import React, {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteProdutoServer, fetchProdutos, selectAllProdutos} from './utilitarios/ProdutosSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../components/img/secador.jpeg'


function LinhaProduto(props){
      if(props != null && props.produto != null && props.produto.id != null){
          return(
                    <div className="row resultado-busca" style={{
              backgroundColor:"dodgerblue",
              padding:"40px",
              color:"white",
              fontFamily:"inherit",
              borderRadius:"10px",
              textAlign:"Right",
              widht:"540px"
          }}>
          

          <div className="col-4">
                  <img className="img-fluid" src={props.produto.img} alt="" style={{borderRadius:"10px"}}/>
              </div>

              <div className="col text">
              <h5  style={{
                      textAlign:"Center",
                      fontSize:"60px"
                  }}><strong>{props.produto.name}</strong></h5>
                  <br/>
                  <br/>
                  <div style={{fontSize:"20px"}}>
                    <p><strong>Valor:</strong> {props.produto.preco} Reais</p>
                  <br/>
                  <p>Descrição: {props.produto.desc}</p>  
                  </div>
                  


              </div>
              <Link to={`/produtos/${props.produto.id}`}>
              <button type="button" className="btn btn-primary">Alterar</button>
              </Link>

              <br/>
              <p style={{textAlign:"center",
                          fontSize:"20px"
              }}><strong>Deletar Produto?</strong></p>
              <br/>
              
              <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirProduto(props.produto.id)}>X</button>
          
          </div>
            
          );
      }else{
          return(<tr><td colSpan={3}>Não foi possível exibir o produto.</td></tr>)
      }
  }

function TabelaProdutos(props){

    if(props != null && props.produtos != null && props.produtos.length > 0){
      return(
              <section className="pb-2">
              {props.produtos.map((produto) => <LinhaProduto key={produto.id} produto={produto} 
                onClickExcluirProduto={props.onClickExcluirProduto} />)}
                </section>
      );
    }else{
      return(<div id="produtos">Não existem produtos a serem exibidos.</div>)
    }
}

  
  
 
  function ListagemProduto(props){
    
    const produtos = useSelector(selectAllProdutos)
    const status = useSelector(state => state.produtos.status);
    const error = useSelector(state => state.produtos.error);
    const id = localStorage.getItem('id')
  
  
    const dispatch = useDispatch();
  
  
    function handleClickExcluirProduto(id){
          dispatch(deleteProdutoServer(id));
    }
  
     useEffect(() => {
          if (status === 'not_loaded' || status === 'loadedt' || status === 'saved' ) {
         
              dispatch(fetchProdutos())
          }else if(status === 'failed'){
              //setTimeout(()=>dispatch(fetchProdutos()), 5000);
          }
      }, [status, dispatch])
      
    
    let tabelaProdutos;
    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
      tabelaProdutos = <TabelaProdutos produtos={produtos} onClickExcluirProduto={handleClickExcluirProduto} />;
    }else if(status === 'loading'){
      tabelaProdutos = <div id="produtos">Carregando os produtos...</div>;
    }else if(status === 'not_loaded'){
      tabelaProdutos = '';
    }else{
      //status === 'failed' or any other
      tabelaProdutos = <div id="produtos">Error: {error}</div>;
    }
  
    return (
              
                            <main className="text-center container first-element">
                <h2 className="my-3">Meus produtos</h2>

                {tabelaProdutos}
                <p className="mb-2">Quer ajudar seus vizinhos?</p>
                <Link to='/compartilhe'>
                    <button type="button" className="btn btn-primary">Compartilhe</button>
                </Link>

            </main>
          );
  }
  
  export { ListagemProduto};
  