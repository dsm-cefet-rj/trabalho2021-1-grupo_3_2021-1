
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {fetchServicos, deleteServicoServer, setStatus, selectAllServicos} from './utilitarios/ServicosSlice'
import foto from '../components/img/furadeira.jpg'



function TabelaServicos(props) {
    const servicos = useSelector(selectAllServicos)
    const status = useSelector(state => state.servicos.status)
    const error = useSelector(state => state.servicos.error)
    const dispatch = useDispatch()

    function handleClickExcluirServico(id) {
        dispatch(deleteServicoServer(id))
    }

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchServicos())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loaded': case 'saved':
            return (
                <section className="pb-2">
                    {servicos.map((servico) => <LinhaServico key={servico.id} servico={servico} onClickExcluirServico={handleClickExcluirServico} />)}
                </section>

            );
        case 'loading':
            return (<div>Carregando...</div>);
        case 'failed':
        default:
            return (<div>{error}</div>)
    }
}

function LinhaServico(props) {
    const status = useSelector(state => state.servicos.status)
    const dispatch = useDispatch()
    var [msg, setMsg] = useState('');

    useEffect(() => {
        if (status === 'saved') {
            setMsg('Servico salvo com sucesso');
            dispatch(setStatus('loaded'));
        } else if (status === 'deleted') {
            setMsg('Servico excluído com sucesso');
            dispatch(setStatus('loaded'));
        }
    }, [status, dispatch]);  
    return (<>
        <div>{msg}</div>

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
                    <Link to={`/servico/${props.servico.id}`}>
                    <button type="button" className="btn btn-primary">Serviço</button>
                    </Link>

                    <br/>
                    <p style={{textAlign:"center",
                                fontSize:"20px"
                    }}><strong>Deletar Serviço?</strong></p>
                    <br/>

                    <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirServico(props.servico.id)}>X</button>
                
                </div>
    </>
    );
}

function ListaServico(props) {


    return (
        <>
            <main className="text-center container first-element">
                <h2 className="my-3">Meus servicos</h2>

                <TabelaServicos />
                <p className="mb-2">Quer ajudar seus vizinhos?</p>
                <Link to='/CadServico'>
                    <button type="button" className="btn btn-primary">Compartilhe</button>
                </Link>

            </main>


        </>
    );
}

export { ListaServico };
