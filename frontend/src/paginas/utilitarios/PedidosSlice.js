import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'


const pedidosAdapter = createEntityAdapter();

const initialState = pedidosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchPedidos = createAsyncThunk('pedidos/fetchPedidos', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/pedidos`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deletePedidoServer = createAsyncThunk('pedidos/deletePedidoServer', async (idPedido, {getState}) => {
    await httpDelete(`${baseUrl}/pedidos/${idPedido}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idPedido;
});

export const addPedidoServer = createAsyncThunk('pedidos/addPedidoServer', async (pedido, {getState}) => {
    return await httpPost(`${baseUrl}/pedidos`, pedido, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updatePedidoServer = createAsyncThunk('pedidos/updatePedidoServer', async (pedido, {getState}) => {
    return await httpPut(`${baseUrl}/pedidos/${pedido.id}`, pedido, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const pedidosSlice = createSlice({
    name: 'pedidos',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {state.status = action.payload}
    },
    extraReducers: {
        [fetchPedidos.pending]: (state, action) => {state.status = 'loading'},
        [fetchPedidos.fulfilled]: (state, action) => {state.status = 'loaded'; pedidosAdapter.setAll(state, action.payload);},
        [fetchPedidos.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar pedidos: ' + action.error.message},        
        [deletePedidoServer.fulfilled]: (state, action) => {state.status = 'deleted'; pedidosAdapter.removeOne(state, action.payload);},
        [deletePedidoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir pedido: ' + action.error.message},
        [addPedidoServer.fulfilled]: (state, action) => {state.status = 'saved'; pedidosAdapter.addOne(state, action.payload);},
        [addPedidoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar pedido: ' + action.error.message},        
        [updatePedidoServer.fulfilled]: (state, action) => {state.status = 'saved'; pedidosAdapter.upsertOne(state, action.payload);},
        [updatePedidoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar pedido: ' + action.error.message},
    }
})

export const { setStatus } = pedidosSlice.actions

export default pedidosSlice.reducer

export const {
    selectAll: selectAllPedidos,
    selectById: selectPedidosById,
    selectIds: selectPedidosIds
} = pedidosAdapter.getSelectors(state => state.pedidos)
    