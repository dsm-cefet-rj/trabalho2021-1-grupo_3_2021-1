import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const pedidosAdapter = createEntityAdapter();

const initialState = pedidosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array pedidos foi removido do state inicial, será criado pelo adapter */
});

export const fetchPedidos = createAsyncThunk('pedidos/fetchPedidos', async (_) => {
    return await httpGet(`${baseUrl}/pedidos`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const fetchPedido = createAsyncThunk('pedidos/fetchPedido', async (idUser) => {
    return await httpGet(`${baseUrl}/pedido`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const deletePedidoServer = createAsyncThunk('pedidos/deletePedidoServer', async (idPedido, {}) => {
    await httpDelete(`${baseUrl}/pedidos/${idPedido}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
    return idPedido;
});

export const addPedidoServer = createAsyncThunk('pedidos/addPedidoServer', async (pedido, {}) => {
    return await httpPost(`${baseUrl}/pedidos`, pedido, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const updatePedidoServer = createAsyncThunk('pedidos/updatePedidoServer', async (pedido, {}) => {
    return await httpPut(`${baseUrl}/pedidos/${pedido.id}`, pedido, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const pedidosSlice = createSlice({
    name: 'pedidos',
    initialState: initialState,
    extraReducers: {
        [fetchPedido.pending]: (state, action) => {state.status = 'loading'},
        [fetchPedido.fulfilled]: (state, action) => {state.status = 'loadedt'; pedidosAdapter.setAll(state, action.payload);},
        [fetchPedido.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [fetchPedidos.pending]: (state, action) => {state.status = 'loading'},
       [fetchPedidos.fulfilled]: (state, action) => {state.status = 'loaded'; pedidosAdapter.setAll(state, action.payload);},
       [fetchPedidos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deletePedidoServer.pending]: (state, action) => {state.status = 'loading'},
       [deletePedidoServer.fulfilled]: (state, action) => {state.status = 'deleted'; pedidosAdapter.removeOne(state, action.payload);},
       [addPedidoServer.pending]: (state, action) => {state.status = 'loading'},
       [addPedidoServer.fulfilled]: (state, action) => {state.status = 'saved'; pedidosAdapter.addOne(state, action.payload);},
       [updatePedidoServer.pending]: (state, action) => {state.status = 'loading'},
       [updatePedidoServer.fulfilled]: (state, action) => {state.status = 'saved'; pedidosAdapter.upsertOne(state, action.payload);},
    },
})

export default pedidosSlice.reducer

export const {
    selectAll: selectAllPedidos,
    selectById: selectPedidosById,
    selectIds: selectPedidosIds
} = pedidosAdapter.getSelectors(state => state.pedidos)