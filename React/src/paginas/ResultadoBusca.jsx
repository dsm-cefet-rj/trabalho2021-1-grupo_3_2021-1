import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { deleteProduto } from './ProdutosSlice'





function TabelaProdutos(props) {
    return (
        <section className="pb-2">
            {props.produtos.map((produto) =>
                <LinhaProduto key={produto.id} produto={produto} onClickExcluirProduto={props.onClickExcluirProduto} />)}
        </section>

    );
}

function LinhaProduto(props) {
    return (<>


        <div className="row resultado-busca">

                <Link to={`/produtos/${props.produto.id}`}>
                    <div className="row resultado-busca">
                        <div className="col-4">
                            <img className="img-fluid" src={props.produto.foto} alt="" />
                        </div>

                        <div className="col text-center">
                            <h5>{props.produto.name}</h5>
                            <p>{props.produto.desc}</p>


                        </div>
                    </div>
                </Link>
                <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirProduto(props.produto.id)}>X</button>





        </div>
    </>
    );
}

function Resultado(props) {

    const produtos = useSelector(state => state.produtos)
    const dispatch = useDispatch()

    function handleClickExcluirProduto(id) {
        dispatch(deleteProduto(id))
    }

    return (
        <>
            <main className="text-center container first-element">
                <h2 className="my-3">Resultados</h2>

                <TabelaProdutos produtos={produtos}
                    onClickExcluirProduto={handleClickExcluirProduto} />
                <p className="mb-2">Quer ajudar seus visinhos?</p>
                <Link to='/compartilhe'>
                    <button type="button" className="btn btn-primary">Compartilhe</button>
                </Link>

            </main>


        </>
    );
}

export { Resultado };
/*

function Resultado () {
    return (
            <main className="text-center container first-element">
                <h2 className="my-3">Resultados</h2>

                <TabelaItens projetos={projetos} />
                <p className="mb-2">Não achou o que procurava?</p>
                <button type="button" className="btn btn-primary">Faça um Pedido</button>
            </main>
    )
}


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function TabelaItens(props) {
    return (
            <section className="pb-2">
                {props.projetos.map((projeto, index) =>
                    <ItemBusca key={index} foto={projeto.foto} name={projeto.name} desc={projeto.desc} />)}
            </section>
    )
}

function ItemBusca(props) {
    return (
            <div className="row resultado-busca">
                <div className="col-4">
                    <img className="img-fluid" src={props.foto} alt="" />
                </div>
                <div className="col text-center">
                    <h5>{props.name}</h5>
                    <p>{props.desc}</p>
                </div>
            </div>
    );
}

export default TabelaItens;

export default Resultado;*/