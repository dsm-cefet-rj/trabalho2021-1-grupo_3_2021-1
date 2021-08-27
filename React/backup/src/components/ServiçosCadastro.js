import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function ServCad() {
    return (
        <>
            <div className="mb-3 col-sm-4">
                <select id="select-categoria" name="item-categoria" className="form-select" form="form-cadastro">
                    <option selected hidden>Escolha uma categoria</option>
                    <option value="ferramenta">Ferramenta</option>
                    <option value="eletro">Eletrodoméstico</option>
                    <option value="veiculo">Veículo</option>
                    <option value="outro">Outro</option>
                </select>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Item</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="martelo, chave de fenda, furadeira..." />
            </div>

            <div className="mb-3">
                <label for="formFile" className="form-label">Imagem ilustrativa</label>
                <input className="form-control form-control-sm" type="file" id="formFile" aria-describedby="imageHelp" />
                <div id="imageHelp" className="form-text">A imagem será usada apenas como referência para os outros usuários</div>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Descrição</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Adicione uma descrição"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </>
            );
}

