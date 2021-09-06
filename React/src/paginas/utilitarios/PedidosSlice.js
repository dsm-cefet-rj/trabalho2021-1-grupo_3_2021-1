import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'


const pedidosAdapter = createEntityAdapter();

const initialState = pedidosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchPedidos = createAsyncThunk('pedidos/fetchPedidos', async () => {
    return await httpGet('http://localhost:3004/pedidos');
});

export const deletePedidoServer = createAsyncThunk('pedidos/deletePedidoServer', async (idPedido) => {
    await httpDelete(`http://localhost:3004/pedidos/${idPedido}`);
    return idPedido;
});

export const addPedidoServer = createAsyncThunk('pedidos/addPedidoServer', async (pedido) => {
    return await httpPost('http://localhost:3004/pedidos', pedido);
});

export const updatePedidoServer = createAsyncThunk('pedidos/updatePedidoServer', async (pedido) => {
    return await httpPut(`http://localhost:3004/pedidos/${pedido.id}`, pedido);
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
    