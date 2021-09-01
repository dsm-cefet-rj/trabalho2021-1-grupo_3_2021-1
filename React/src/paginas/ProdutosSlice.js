import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'

const initialState = {
    status: 'not_loaded',
    produtos: [],
    error: null
};

export const fetchProdutos = createAsyncThunk('produtos/fetchProdutos', async () => {
    return await httpGet('http://localhost:3004/produtos');
});

export const deleteProdutoServer = createAsyncThunk('produtos/deleteProdutoServer', async (idProduto) => {
    await httpDelete(`http://localhost:3004/produtos/${idProduto}`);
    return idProduto;
});

export const addProdutoServer = createAsyncThunk('produtos/addProdutoServer', async (produto) => {
    return await httpPost('http://localhost:3004/produtos', produto);
});

export const updateProdutoServer = createAsyncThunk('produtos/updateProdutoServer', async (produto) => {
    return await httpPut(`http://localhost:3004/produtos/${produto.id}`, produto);
});

function fullfillProdutosReducer(produtosState, produtosFetched){
    produtosState.status = 'loaded';
    produtosState.produtos = produtosFetched;
}

function addProdutoReducer(state, produto){
    let proxId = 1 + (state.produtos.length > 0 ? state.produtos.map(p => p.id).reduce((x, y) => Math.max(x,y)) : 0);
    state.produtos = state.produtos.concat([{...produto, id: proxId}]);
}

function updateProdutoReducer(state, produto){
    let index = state.produtos.map(p => p.id).indexOf(produto.id);
    state.produtos.splice(index, 1, produto);
}

function deleteProdutoReducer(state, idProduto){
    state.produtos = state.produtos.filter((p) => p.id !== idProduto);
}

export const produtosSlice = createSlice({
    name: 'produtos',
    initialState: initialState,
    reducers: {
        addProduto: (state, action) => addProdutoReducer(state, action.payload),
        updateProduto: (state, action) => updateProdutoReducer(state, action.payload),
        deleteProduto: (state, action) => deleteProdutoReducer(state, action.payload),
        setStatus: (state, action) => {state.status = action.payload}
    },
    extraReducers: {
        [fetchProdutos.pending]: (state, action) => {state.status = 'loading'},
        [fetchProdutos.fulfilled]: (state, action) => {fullfillProdutosReducer(state, action.payload)},
        [fetchProdutos.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar produtos: ' + action.error.message},        
        [deleteProdutoServer.fulfilled]: (state, action) => {state.status = 'deleted'; deleteProdutoReducer(state, action.payload)},
        [deleteProdutoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir produto: ' + action.error.message},
        [addProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; addProdutoReducer(state, action.payload)},
        [addProdutoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar produto: ' + action.error.message},        
        [updateProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; updateProdutoReducer(state, action.payload)},
        [updateProdutoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar produto: ' + action.error.message},
    }
})

export const {addProduto, updateProduto, deleteProduto, setStatus } = produtosSlice.actions

export default produtosSlice.reducer