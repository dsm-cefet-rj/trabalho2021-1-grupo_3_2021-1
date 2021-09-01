import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'


const produtosAdapter = createEntityAdapter();

const initialState = produtosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

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

export const produtosSlice = createSlice({
    name: 'produtos',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {state.status = action.payload}
    },
    extraReducers: {
        [fetchProdutos.pending]: (state, action) => {state.status = 'loading'},
        [fetchProdutos.fulfilled]: (state, action) => {state.status = 'loaded'; produtosAdapter.setAll(state, action.payload);},
        [fetchProdutos.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar produtos: ' + action.error.message},        
        [deleteProdutoServer.fulfilled]: (state, action) => {state.status = 'deleted'; produtosAdapter.removeOne(state, action.payload);},
        [deleteProdutoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir produto: ' + action.error.message},
        [addProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; produtosAdapter.addOne(state, action.payload);},
        [addProdutoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar produto: ' + action.error.message},        
        [updateProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; produtosAdapter.upsertOne(state, action.payload);},
        [updateProdutoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar produto: ' + action.error.message},
    }
})

export const { setStatus } = produtosSlice.actions

export default produtosSlice.reducer

export const {
    selectAll: selectAllProdutos,
    selectById: selectProdutosById,
    selectIds: selectProdutosIds
} = produtosAdapter.getSelectors(state => state.produtos)