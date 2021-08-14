import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function ServCad() {
    return (
        <>
            <div class="mb-3 col-sm-4">
                <select id="select-categoria" name="item-categoria" class="form-select" form="form-cadastro">
                    <option selected hidden>Escolha uma categoria</option>
                    <option value="ferramenta">Ferramenta</option>
                    <option value="eletro">Eletrodoméstico</option>
                    <option value="veiculo">Veículo</option>
                    <option value="outro">Outro</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Item</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="martelo, chave de fenda, furadeira..." />
            </div>

            <div class="mb-3">
                <label for="formFile" class="form-label">Imagem ilustrativa</label>
                <input class="form-control form-control-sm" type="file" id="formFile" aria-describedby="imageHelp" />
                <div id="imageHelp" class="form-text">A imagem será usada apenas como referência para os outros usuários</div>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Adicione uma descrição"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </>
            );
}

