import React, {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deletePedidoServer, fetchPedidos, selectAllPedidos} from './utilitarios/PedidosSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../components/img/secador.jpeg'


function LinhaPedido(props){
      if(props != null && props.pedido != null && props.pedido.id != null){
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
                  <img className="img-fluid" src={props.pedido.img} alt="" style={{borderRadius:"10px"}}/>
              </div>

              <div className="col text">
              <h5  style={{
                      textAlign:"Center",
                      fontSize:"60px"
                  }}><strong>{props.pedido.name}</strong></h5>
                  <br/>
                  <br/>
                  <div style={{fontSize:"20px"}}>
                    <p><strong>Valor:</strong> {props.pedido.preco} Reais</p>
                  <br/>
                  <p>Descrição: {props.pedido.desc}</p>  
                  </div>
                  


              </div>
              <Link to={`/pedidos/${props.pedido.id}`}>
              <button type="button" className="btn btn-primary">Alterar</button>
              </Link>

              <br/>
              <p style={{textAlign:"center",
                          fontSize:"20px"
              }}><strong>Deletar Pedido?</strong></p>
              <br/>
              
              <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirPedido(props.pedido.id)}>X</button>
          
          </div>
            
          );
      }else{
          return(<tr><td colSpan={3}>Não foi possível exibir o pedido.</td></tr>)
      }
  }

function TabelaPedidos(props){
    if(props != null && props.pedidos != null && props.pedidos.length > 0){
      return(
              <section className="pb-2">
              {props.pedidos.map((pedido) => <LinhaPedido key={pedido.id} pedido={pedido} 
                onClickExcluirPedido={props.onClickExcluirPedido} />)}
                </section>
      );
    }else{
      return(<div id="pedidos">Não existem pedidos a serem exibidos.</div>)
    }
}

  
  
 
  function ListaPedido(props){
    
    const pedidos = useSelector(selectAllPedidos)
    const status = useSelector(state => state.pedidos.status);
    const error = useSelector(state => state.pedidos.error);
  
    const dispatch = useDispatch();
  
  
    function handleClickExcluirPedido(id){
          dispatch(deletePedidoServer(id));
    }
  
     useEffect(() => {
          if (status === 'not_loaded' || status === 'loadedt'|| status === 'saved'  ) {
              dispatch(fetchPedidos())
          }else if(status === 'failed'){
              //setTimeout(()=>dispatch(fetchPedidos()), 5000);
          }
      }, [status, dispatch])
      
    
    let tabelaPedidos;
    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
      tabelaPedidos = <TabelaPedidos pedidos={pedidos} onClickExcluirPedido={handleClickExcluirPedido} />;
    }else if(status === 'loading'){
      tabelaPedidos = <div id="pedidos">Carregando os pedidos...</div>;
    }else if(status === 'not_loaded' ){
      tabelaPedidos = '';
    }else{
      //status === 'failed' or any other
      tabelaPedidos = <div id="pedidos">Error: {error}</div>;
    }
  
    return (
              
                            <main className="text-center container first-element">
                <h2 className="my-3">Meus pedidos</h2>

                {tabelaPedidos}
                <p className="mb-2">deseja algo?</p>
                <Link to='/CadPedido'>
                    <button type="button" className="btn btn-primary">solicite</button>
                </Link>

            </main>
          );
  }
  
  export { ListaPedido};
  
