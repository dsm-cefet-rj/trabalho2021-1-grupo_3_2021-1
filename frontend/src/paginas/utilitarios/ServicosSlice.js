import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'


const servicosAdapter = createEntityAdapter();

const initialState = servicosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});
export const fetchServicos = createAsyncThunk('servicos/fetchServicos', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/servicos`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const deleteServicoServer = createAsyncThunk('servicos/deleteServicoServer', async (idServico, {getState}) => {
    await httpDelete(`${baseUrl}/servicos/${idServico}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
    return idServico;
});

export const addServicoServer = createAsyncThunk('servicos/addServicoServer', async (servico, {getState}) => {
    return await httpPost(`${baseUrl}/servicos`, servico, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const updateServicoServer = createAsyncThunk('servicos/updateServicoServer', async (servico, {getState}) => {
    return await httpPut(`${baseUrl}/servicos/${servico.id}`, servico, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
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
    