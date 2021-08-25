import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function CadastrarProduto () {
    return (
            <main className="container first-element">
                <form className="form-cadastro">
                    <fieldset className="text-center">
                        <legend>
                            <h3 className="">O que você deseja compartilhar?</h3>
                        </legend>
                        <div>
                            <label className="form-check-label mx-1">
                                <input className="form-check-input mx-1" type="radio" name="radioCadastro" value="coisas" />
                                Itens
                            </label>
                            <label className="form-check-label mx-1">
                                <input className="form-check-input mx-1" type="radio" name="radioCadastro" value="servicos" />
                                Serviços
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="form-coisas">
                        <legend>
                            Compartilhar itens
                        </legend>
                        <CadastraItem />
                    </fieldset>

                    <fieldset className="form-servicos">
                        <legend>
                            Compartilhar serviços
                        </legend>
                        <CadastraServico />
                    </fieldset>
                </form>
            </main>
    );
}


function CadastraItem() {
    return (
        <>
            <div className="mb-3">
                <label className="form-label">Serviço</label>
                <input type="email" className="form-control form-control-sm" placeholder="Marceneiro(a), pedreiro(a), téc de informática..." />
            </div>

            <div className="mb-3">
                <label className="form-label">Imagem ilustrativa</label>
                <input className="form-control form-control-sm" type="file" aria-describedby="imageHelp" />
                <div id="imageHelp" className="form-text">A imagem será usada apenas como referência para os outros usuários</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea className="form-control" rows="3" placeholder="Adicione uma descrição"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </>
    );
}

function CadastraServico() {
    return (
        <>
            <div className="mb-3 col-sm-4">
                <select id="select-categoria" name="item-categoria" className="form-select" form="form-cadastro">
                    <option defaultValue hidden>Escolha uma categoria</option>
                    <option value="ferramenta">Ferramenta</option>
                    <option value="eletro">Eletrodoméstico</option>
                    <option value="veiculo">Veículo</option>
                    <option value="outro">Outro</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Item</label>
                <input type="text" className="form-control" placeholder="martelo, chave de fenda, furadeira..." />
            </div>

            <div className="mb-3">
                <label className="form-label">Imagem ilustrativa</label>
                <input className="form-control form-control-sm" type="file" aria-describedby="imageHelp" />
                <div id="imageHelp" className="form-text">A imagem será usada apenas como referência para os outros usuários</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea className="form-control" rows="3" placeholder="Adicione uma descrição"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </>
    );
}

export default CadastrarProduto;