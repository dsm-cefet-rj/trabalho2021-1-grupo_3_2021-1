
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React from 'react';

import { Link } from "react-router-dom";

function Procure () {
    return (
        <div className="row resultado-busca">
        
        <Link to="/procureProd">
        <br/><br/><br/>
            <h3 className="link-title">Produto</h3>
        </Link>
        <Link  to="/procurePed">
            <h3 className="link-title">Pedido</h3>
        </Link>
        <Link to="/procureServ">
            <h3 className="link-title">Serviço</h3>
        </Link>
        
        </div>
    );
}

export default Procure;