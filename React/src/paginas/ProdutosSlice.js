import Produto from '../paginas/Produto';
import {createSlice} from '@reduxjs/toolkit'
import Bike from '../components/img/bicicleta.jpg'
import chave from '../components/img/chave-philips.jpg'

const initialProjects =
    [new Produto({id: 1, foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim'}),
    new Produto({id: 2, foto: chave, name: 'chave', desc: 'filipis'})];
 

function addProdutoReducer(produtos, produto){
    let proxId = 1 + produtos.map(p => p.id).reduce((x, y) => Math.max(x,y));
    return produtos.concat([{...produto, id: proxId}]);
}

function updateProdutoReducer(produtos, produto){
    let index = produtos.map(p => p.id).indexOf(produto.id);
    produtos.splice(index, 1, produto);
    return produtos;
}
function deleteProdutoReducer(produtos, idProduto){
    return produtos.filter((p) => p.id !== idProduto);
}

export const produtosSlice = createSlice({
    name: 'produtos',
    initialState: initialProjects,
    reducers: {
        addProduto: (state, action) => addProdutoReducer(state, action.payload),
        updateProduto: (state, action) => updateProdutoReducer(state, action.payload),
        deleteProduto: (state, action) => deleteProdutoReducer(state, action.payload)
    }
})

export const { addProduto, updateProduto, deleteProduto } = produtosSlice.actions

export default produtosSlice.reducer