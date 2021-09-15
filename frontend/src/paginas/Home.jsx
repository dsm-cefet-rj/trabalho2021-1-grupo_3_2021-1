import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from "react-router-dom";
import imgProcure from "../components/img/main.png"
import imgRegistre from "../components/img/share.png"



function Home () {
    
    return (
        <>
            <section className="first-element container text-center flex-column">
                <h2 className="my-3">Bem-vindo, seu_nome.</h2>
                <div className="row d-flex justify-content-evenly">
                    <figure className="col index-menu blue-card border margin">
                        <Link className="reset-link" to='/procure'>
                            <h3 className="link-title">Procure</h3>
                            <img className="img-fluid" src={imgProcure} alt="" />
                        </Link>
                    </figure>
                    
                    <figure className="col index-menu blue-card border margin">
                        <Link className="reset-link" to="/escolha">
                            <h3 className="link-title">Registre Produtos ou serviços!</h3>
                            <img className="img-fluid" src={imgRegistre} alt="" />
                            </Link>
                            
                            
                            
                        
                    </figure>
                </div>
            </section>
        </>
    )
}


export default Home;
