
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React from 'react';
import Item from './listProduto'
import Servico from './ListServico'
import Pedido from './ListPedido'

function Procure () {
    return (
        <>
        <Servico/>
        <Item/>
        <Pedido/>
        </>
    );
}

export default Procure;