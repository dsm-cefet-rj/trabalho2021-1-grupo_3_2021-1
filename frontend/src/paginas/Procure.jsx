
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React from 'react';

import { Link } from "react-router-dom";

function Procure () {
    return (


        <section className="container first-element">
        <div  
      
      class="container-md"
      style={{

        backgroundColor:'dodgerblue',
        borderRadius:'20px',
        padding:'50px',
        


      }}>

<div  
      
      class="container-md"
      style={{

        backgroundColor:'blue',
        borderRadius:'20px',
        padding:'20px',
        color:'white',


      }}>
        <h3 className="link-title" style={{fontSize:"45px"}}>Produto</h3>
        <Link to="/procureProd">
        <button type="button" className="btn btn-primary">Produtos em destaque</button>
        </Link>
        </div>
        <br/><br/>
        
      <div
      class="container-md"
      style={{

        backgroundColor:'blue',
        borderRadius:'20px',
        padding:'50px',
        color:'white',


      }}>
        <h3 className="link-title" style={{fontSize:"45px"}}>Pedido</h3>
        <Link  to="/procurePed">
        <button type="button" className="btn btn-primary">Pedidos em destaque</button>
        </Link>
        </div>
        <br/><br/>
        <div  
      
      class="container-md"
      style={{

        backgroundColor:'blue',
        borderRadius:'20px',
        padding:'50px',
        color:'white',


      }}>
        <h3 className="link-title" style={{fontSize:"45px"}}>Serviço</h3>
        <Link to="/procureServ">
        <button type="button" className="btn btn-primary">Serviços em destaque</button>
        </Link>
        </div>
        </div>
        </section>
    );
}

export default Procure;
