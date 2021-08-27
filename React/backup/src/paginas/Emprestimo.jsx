import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgPerfil from "../components/img/img-perfil.jpg";

import TabelaItens from "../components/TabelaItens";
import Bike from "../components/img/bicicleta.jpg";
import chave from "../components/img/chave-philips.jpg";

const produtos = [
  { foto: Bike, name: "Bicicleta", desc: "Bicicleta ruim" },
  { foto: chave, name: "chave", desc: "filipis" },
];

function Emprestimo() {
  return (
    <Container className="first-element">
      <h3 className="text-center mb-3">Empréstimo</h3>
      <Row>
        <Col className="d-flex flex-column">
          <img className="img-fluid rounded" src={imgPerfil} alt="" />
          <h6 className="text-center mt-2">Nome 1</h6>
        </Col>
        <Col xs={3} className="d-flex align-items-center justify-content-center">
          <h6 className="text-center">Emprestou para</h6>
        </Col>
        <Col>
          <img className="img-fluid rounded" src={imgPerfil} alt="" />
          <h6 className="text-center mt-2">Nome 2</h6>
        </Col>
      </Row>
      <h3 className="text-center my-3">Lista de Itens</h3>
      <TabelaItens produtos={produtos} />
    </Container>
  );
}

export default Emprestimo;
