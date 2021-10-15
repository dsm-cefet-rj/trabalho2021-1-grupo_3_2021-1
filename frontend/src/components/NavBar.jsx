import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/App";
import emp from "../components/img/Empresta.png"
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

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
          <li className="reset-link nav-link">
            Logoff</li>
        </div>
      </Collapse>
    </section>
  );
}

export default NavBar;
