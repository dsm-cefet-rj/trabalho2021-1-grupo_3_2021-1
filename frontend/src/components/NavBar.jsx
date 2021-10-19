import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/App";
import {useDispatch, useSelector} from 'react-redux';
import emp from "../components/img/Empresta.png"
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import {logoutServer} from '../paginas/utilitarios/LoginSlice';


function NavBar() {
  const dispatch = useDispatch()
  const status = useSelector(state => state.logins.status);
  const [open, setOpen] = useState(false);

  function test(){
    dispatch(logoutServer());
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    
    
  }

  return (
    <section className="nav-menu" >
      <nav className="navbar navbar-dark" style={{backgroundColor:"	#0000FF"}}>
        <div className="container-fluid" >
          <button
            className="navbar-toggler"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src={emp}  style={{flex: 0,
    width: 500,
    height: 100,
    }}></img>
          <Link to="/Home" className=" ">
            <span className="reset-link nav-btn nav-link">Home</span>
          </Link>
        </div>
      </nav>
      <Collapse in={open} style={{backgroundColor:"	#0000FF"}}>
        <div
          className="nav-links"
          id="example-collapse-text"
          onClick={() => setOpen(false)}
        >
          <li className="nav-link">
            <Link className="reset-link" to="/Perfil">
              Perfil
            </Link>
          </li>
          <li className="nav-link">
            <Link className="reset-link" to="/">
              Login
            </Link>
          </li>
          <li className="nav-link">
            <Link className="reset-link" to="/CadUser">
              cadastre-se
            </Link>
          </li>
          <li className="nav-link">
            <Link className="reset-link" to="/produtos/:id">
              Cadastrar Produtos
            </Link>
          </li>
          <li className="nav-link">
            <Link className="reset-link" to="/pedidos/:id">
              Cadastrar Pedidos
            </Link>
          </li>
          <li className="nav-link">
            <Link className="reset-link" to="/servicos/:id">
              Cadastrar Serviços
            </Link>
          </li>
          <li className="reset-link nav-link">Configurações</li>
          <Link to="/" className=" ">
          <button
            className="navbar-toggler"
            onClick={() => test()}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >logout
            <span className="navbar-toggler-icon"></span>
          </button>
          </Link>
         
        </div>
      </Collapse>
    </section>
  );
}

export default NavBar;
