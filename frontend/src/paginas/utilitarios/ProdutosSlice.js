import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const produtosAdapter = createEntityAdapter();

const initialState = produtosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array produtos foi removido do state inicial, será criado pelo adapter */
});

export const fetchProdutos = createAsyncThunk('produtos/fetchProdutos', async (_) => {
    return await httpGet(`${baseUrl}/produtos`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const fetchProduto = createAsyncThunk('produtos/fetchProduto', async (idUser) => {
    return await httpGet(`${baseUrl}/produto`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const deleteProdutoServer = createAsyncThunk('produtos/deleteProdutoServer', async (idProduto, {}) => {
    await httpDelete(`${baseUrl}/produtos/${idProduto}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
    return idProduto;
});

export const addProdutoServer = createAsyncThunk('produtos/addProdutoServer', async (produto, {}) => {
    return await httpPost(`${baseUrl}/produtos`, produto, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const updateProdutoServer = createAsyncThunk('produtos/updateProdutoServer', async (produto, {}) => {
    return await httpPut(`${baseUrl}/produtos/${produto.id}`, produto, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const produtosSlice = createSlice({
    name: 'produtos',
    initialState: initialState,
    extraReducers: {
        [fetchProduto.pending]: (state, action) => {state.status = 'loading'},
        [fetchProduto.fulfilled]: (state, action) => {state.status = 'loadedt'; produtosAdapter.setAll(state, action.payload);},
        [fetchProduto.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [fetchProdutos.pending]: (state, action) => {state.status = 'loading'},
       [fetchProdutos.fulfilled]: (state, action) => {state.status = 'loaded'; produtosAdapter.setAll(state, action.payload);},
       [fetchProdutos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteProdutoServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteProdutoServer.fulfilled]: (state, action) => {state.status = 'deleted'; produtosAdapter.removeOne(state, action.payload);},
       [addProdutoServer.pending]: (state, action) => {state.status = 'loading'},
       [addProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; produtosAdapter.addOne(state, action.payload);},
       [updateProdutoServer.pending]: (state, action) => {state.status = 'loading'},
       [updateProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; produtosAdapter.upsertOne(state, action.payload);},
    },
})

export default produtosSlice.reducer

export const {
    selectAll: selectAllProdutos,
    selectById: selectProdutosById,
    selectIds: selectProdutosIds
} = produtosAdapter.getSelectors(state => state.produtos)