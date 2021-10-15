import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'


const produtosAdapter = createEntityAdapter();

const initialState = produtosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchProdutos = createAsyncThunk('produtos/fetchProdutos', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/produtos`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const deleteProdutoServer = createAsyncThunk('produtos/deleteProdutoServer', async (idProduto, {getState}) => {
    await httpDelete(`${baseUrl}/produtos/${idProduto}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
    return idProduto;
});

export const addProdutoServer = createAsyncThunk('produtos/addProdutoServer', async (produto, {getState}) => {
    return await httpPost(`${baseUrl}/produtos`, produto, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const updateProdutoServer = createAsyncThunk('produtos/updateProdutoServer', async (produto, {getState}) => {
    return await httpPut(`${baseUrl}/produtos/${produto.id}`, produto, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
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
    