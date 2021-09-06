import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'


const servicosAdapter = createEntityAdapter();

const initialState = servicosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchServicos = createAsyncThunk('servicos/fetchServicos', async () => {
    return await httpGet('http://localhost:3004/servicos');
});

export const deleteServicoServer = createAsyncThunk('servicos/deleteServicoServer', async (idServico) => {
    await httpDelete(`http://localhost:3004/servicos/${idServico}`);
    return idServico;
});

export const addServicoServer = createAsyncThunk('servicos/addServicoServer', async (servico) => {
    return await httpPost('http://localhost:3004/servicos', servico);
});

export const updateServicoServer = createAsyncThunk('servicos/updateServicoServer', async (servico) => {
    return await httpPut(`http://localhost:3004/servicos/${servico.id}`, servico);
});

export const servicosSlice = createSlice({
    name: 'servicos',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {state.status = action.payload}
    },
    extraReducers: {
        [fetchServicos.pending]: (state, action) => {state.status = 'loading'},
        [fetchServicos.fulfilled]: (state, action) => {state.status = 'loaded'; servicosAdapter.setAll(state, action.payload);},
        [fetchServicos.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar servicos: ' + action.error.message},        
        [deleteServicoServer.fulfilled]: (state, action) => {state.status = 'deleted'; servicosAdapter.removeOne(state, action.payload);},
        [deleteServicoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir servico: ' + action.error.message},
        [addServicoServer.fulfilled]: (state, action) => {state.status = 'saved'; servicosAdapter.addOne(state, action.payload);},
        [addServicoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar servico: ' + action.error.message},        
        [updateServicoServer.fulfilled]: (state, action) => {state.status = 'saved'; servicosAdapter.upsertOne(state, action.payload);},
        [updateServicoServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar servico: ' + action.error.message},
    }
})

export const { setStatus } = servicosSlice.actions

export default servicosSlice.reducer

export const {
    selectAll: selectAllServicos,
    selectById: selectServicosById,
    selectIds: selectServicosIds
} = servicosAdapter.getSelectors(state => state.servicos)
    