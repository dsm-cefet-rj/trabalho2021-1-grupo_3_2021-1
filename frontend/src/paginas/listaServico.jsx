import React, {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteServicoServer, fetchServicos, selectAllServicos} from './utilitarios/ServicosSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../components/img/secador.jpeg'


function LinhaServico(props){
      if(props != null && props.servico != null && props.servico.id != null){
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
                  <img className="img-fluid" src={foto} alt="" style={{borderRadius:"10px"}}/>
              </div>

              <div className="col text">
              <h5  style={{
                      textAlign:"Center",
                      fontSize:"60px"
                  }}><strong>{props.servico.name}</strong></h5>
                  <br/>
                  <br/>
                  <div style={{fontSize:"20px"}}>
                    <p><strong>Valor:</strong> {props.servico.preco} Reais</p>
                  <br/>
                  <p>Descrição: {props.servico.desc}</p>  
                  </div>
                  


              </div>
              <Link to={`/servicos/${props.servico.id}`}>
              <button type="button" className="btn btn-primary">Alterar</button>
              </Link>

              <br/>
              <p style={{textAlign:"center",
                          fontSize:"20px"
              }}><strong>Deletar Servico?</strong></p>
              <br/>
              
              <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirServico(props.servico.id)}>X</button>
          
          </div>
            
          );
      }else{
          return(<tr><td colSpan={3}>Não foi possível exibir o servico.</td></tr>)
      }
  }

function TabelaServicos(props){
    if(props != null && props.servicos != null && props.servicos.length > 0){
      return(
              <section className="pb-2">
              {props.servicos.map((servico) => <LinhaServico key={servico.id} servico={servico} 
                onClickExcluirServico={props.onClickExcluirServico} />)}
                </section>
      );
    }else{
      return(<div id="servicos">Não existem servicos a serem exibidos.</div>)
    }
}

  
  
 
  function ListaServico(props){
    
    const servicos = useSelector(selectAllServicos)
    const status = useSelector(state => state.servicos.status);
    const error = useSelector(state => state.servicos.error);
  
    const dispatch = useDispatch();
  
  
    function handleClickExcluirServico(id){
          dispatch(deleteServicoServer(id));
    }
  
     useEffect(() => {
          if (status === 'not_loaded' ) {
              dispatch(fetchServicos())
          }else if(status === 'failed'){
              //setTimeout(()=>dispatch(fetchServicos()), 5000);
          }
      }, [status, dispatch])
      
    
    let tabelaServicos;
    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
      tabelaServicos = <TabelaServicos servicos={servicos} onClickExcluirServico={handleClickExcluirServico} />;
    }else if(status === 'loading'){
      tabelaServicos = <div id="servicos">Carregando os servicos...</div>;
    }else if(status === 'not_loaded'){
      tabelaServicos = '';
    }else{
      //status === 'failed' or any other
      tabelaServicos = <div id="servicos">Error: {error}</div>;
    }
  
    return (
              
                            <main className="text-center container first-element">
                <h2 className="my-3">Meus servicos</h2>

                {tabelaServicos}
                <p className="mb-2">Quer ajudar seus vizinhos?</p>
                <Link to='/CadServico'>
                    <button type="button" className="btn btn-primary">Compartilhe</button>
                </Link>

            </main>
          );
  }
  
  export { ListaServico};
  