import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/App";

import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="nav-menu">
      <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className=" ">
            <span className="reset-link nav-btn nav-link">Home</span>
          </Link>
        </div>
      </nav>
      <Collapse in={open}>
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
          <li className="reset-link nav-link">
            <Link className="reset-link" to="/Emprestimo">
              Meus Empréstimos
            </Link>
          </li>
          <li className="reset-link nav-link">Configurações</li>
          <li className="reset-link nav-link">Logoff</li>
        </div>
      </Collapse>
    </section>
  );
}

export default NavBar;
