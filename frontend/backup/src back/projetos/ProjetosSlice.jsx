import Bike from '../components/img/bicicleta.jpg'
import chave from '../components/img/chave-philips.jpg'

const initialPedidos = [

    { foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim' },
    { foto: chave, name: 'chave', desc: 'filipis' },
    { foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim' },
    { foto: chave, name: 'chave', desc: 'filipis' },];


function updateProdutoReducer(produtos, produto) {
    let index = produtos.map(p => p.id).indexOf(produto.id);
    produtos.splice(index, 1, produto);
    return produtos;
}

function deleteProdutoReducer(produtos, idProduto) {
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

export const { addProduto, updateProduto, deleteProduto } = produtosSlice.actions

export default produtosSlice.reducer