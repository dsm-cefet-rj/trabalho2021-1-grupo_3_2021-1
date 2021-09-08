import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from 'react-router-dom' 
import foto from '../components/img/bicicleta.jpg'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchServicos, deleteServicoServer, setStatus, selectAllServicos} from './utilitarios/ServicosSlice'


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
                <section className="text-center">
            <h3 className="mt-4 mb-3">Pegue emprestado</h3>

            <div className="d-flex flex-wrap justify-content-evenly mb-3">

            
                    {servicos.map((servico) => <LinhaServico key={servico.id} servico={servico} onClickExcluirServico={handleClickExcluirServico} />)}
                </div>
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

    
            
                <div className="green-card servico-index">
                <Link to={`/servico/${props.servico.id}`}>
                    <div className="col-4">
                        <img className="img-fluid" src={foto} alt="" />
                    </div>

                    <div className="col text-center">
                        <h5>{props.servico.name}</h5>
                        <p>{props.servico.preco} Reais</p>


                    </div>
                    </Link>
                </div>
            
         
    </>
    );
}

function Servico () {
    return (
        <>
           <TabelaServicos/>
           <p className="mb-2">cadastre um servico?</p>
                <Link to='/CadServico'>
                    <button type="button" className="btn btn-primary">Cadastre</button>
                </Link>

        </>
    );
}

export default Servico;