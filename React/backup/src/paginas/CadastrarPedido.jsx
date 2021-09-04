import React, { useState } from "react";
import { Container } from "react-bootstrap";

function CadastrarPedido() {
  const [itensHidden, setItensHidden] = useState(true);
  const [servicosHidden, setServicosHidden] = useState(true);

  function handleRadioSelect(evento) {
    if (evento.target.value === "servicos") {
      setServicosHidden(false);
      setItensHidden(true);
    }
    if (evento.target.value === "itens") {
      setServicosHidden(true);
      setItensHidden(false);
    }
  }

  function submitServico (evento) {
      evento.preventDefault();
      console.log("Mandei servico")
  }

  function submitItem (evento) {
      evento.preventDefault();
      console.log("Mandei item")
  }

  return (
    <>
      <Container className="text-center first-element">
        <legend>
          <h3 className="">Do que você precisa?</h3>
        </legend>

        <div
          onChange={(evento) => {
            handleRadioSelect(evento);
          }}
        >
          <label className="form-check-label mx-1" htmlFor="radio-itens">
            <input
              id="radio-itens"
              className="form-check-input mx-1"
              type="radio"
              name="radio-pedido"
              value="itens"
            />
            Itens
          </label>

          <label className="form-check-label mx-1" htmlFor="radio-servicos">
            <input
              id="radio-servicos"
              className="form-check-input mx-1"
              type="radio"
              name="radio-pedido"
              value="servicos"
            />
            Servicos
          </label>
        </div>
      </Container>

      <form onSubmit={submitItem}>
        <Container hidden={itensHidden}>
          <legend className="text-center">Cadastro de pedido - Servicos</legend>
          <div className="mb-3 col-sm-4">
            <select
              name="item-categoria"
              className="form-select"
              form="form-cadastro"
            >
              <option defaultValue hidden>
                Escolha uma categoria
              </option>
              <option value="ferramenta">Ferramenta</option>
              <option value="eletro">Eletrodoméstico</option>
              <option value="veiculo">Veículo</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="nome-item" className="form-label">
              Item
            </label>
            <input
              type="text"
              className="form-control"
              id="item-nome"
              placeholder="martelo, chave de fenda, furadeira..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="item-img" className="form-label">
              Imagem ilustrativa
            </label>
            <input
              className="form-control form-control-sm"
              type="file"
              id="item-img"
              aria-describedby="imageHelp"
            />
            <div id="imageHelp" className="form-text">
              A imagem será usada apenas como referência para os outros usuários
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="item-descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Adicione uma descrição"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Container>
      </form>

      <form onSubmit={submitServico}>
        <Container hidden={servicosHidden}>
          <legend className="text-center">Cadastro de pedido - Itens</legend>

          <div className="mb-3">
            <label htmlFor="servico-nome" className="form-label">
              Servico
            </label>
            <input
              id="servico-nome"
              type="text"
              className="form-control"
              placeholder="Encanador, pedreiro, téc de informática..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="servico-img" className="form-label">
              Imagem ilustrativa
            </label>
            <input
              id="servico-img"
              className="form-control form-control-sm"
              type="file"
              aria-describedby="imageHelp"
            />
            <div className="form-text">
              A imagem será usada apenas como referência para os outros usuários
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="servico-descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="servico-descricao"
              rows="3"
              placeholder="Adicione uma descrição"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Container>
      </form>
    </>
  );
}

export default CadastrarPedido;
