import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const servicosAdapter = createEntityAdapter();

const initialState = servicosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array servicos foi removido do state inicial, será criado pelo adapter */
});

export const fetchServicos = createAsyncThunk('servicos/fetchServicos', async (_) => {
    return await httpGet(`${baseUrl}/servicos`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const fetchServico = createAsyncThunk('servicos/fetchServico', async (idUser) => {
    return await httpGet(`${baseUrl}/servico`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const deleteServicoServer = createAsyncThunk('servicos/deleteServicoServer', async (idServico, {}) => {
    await httpDelete(`${baseUrl}/servicos/${idServico}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
    return idServico;
});

export const addServicoServer = createAsyncThunk('servicos/addServicoServer', async (servico, {}) => {
    return await httpPost(`${baseUrl}/servicos`, servico, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const updateServicoServer = createAsyncThunk('servicos/updateServicoServer', async (servico, {}) => {
    return await httpPut(`${baseUrl}/servicos/${servico.id}`, servico, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
});

export const servicosSlice = createSlice({
    name: 'servicos',
    initialState: initialState,
    extraReducers: {
        [fetchServico.pending]: (state, action) => {state.status = 'loading'},
        [fetchServico.fulfilled]: (state, action) => {state.status = 'loadedt'; servicosAdapter.setAll(state, action.payload);},
        [fetchServico.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [fetchServicos.pending]: (state, action) => {state.status = 'loading'},
       [fetchServicos.fulfilled]: (state, action) => {state.status = 'loaded'; servicosAdapter.setAll(state, action.payload);},
       [fetchServicos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteServicoServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteServicoServer.fulfilled]: (state, action) => {state.status = 'deleted'; servicosAdapter.removeOne(state, action.payload);},
       [addServicoServer.pending]: (state, action) => {state.status = 'loading'},
       [addServicoServer.fulfilled]: (state, action) => {state.status = 'saved'; servicosAdapter.addOne(state, action.payload);},
       [updateServicoServer.pending]: (state, action) => {state.status = 'loading'},
       [updateServicoServer.fulfilled]: (state, action) => {state.status = 'saved'; servicosAdapter.upsertOne(state, action.payload);},
    },
})

export default servicosSlice.reducer

export const {
    selectAll: selectAllServicos,
    selectById: selectServicosById,
    selectIds: selectServicosIds
} = servicosAdapter.getSelectors(state => state.servicos)