import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'


const usuariosAdapter = createEntityAdapter();

const initialState = usuariosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchUsuarios = createAsyncThunk('usuarios/fetchUsuarios', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/usuarios`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteUsuarioServer = createAsyncThunk('usuarios/deleteUsuarioServer', async (idUsuario, {getState}) => {
    await httpDelete(`${baseUrl}/usuarios/${idUsuario}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idUsuario;
});

export const addUsuarioServer = createAsyncThunk('usuarios/addUsuarioServer', async (usuario, {getState}) => {
    return await httpPost(`${baseUrl}/usuarios`, usuario, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateUsuarioServer = createAsyncThunk('usuarios/updateUsuarioServer', async (usuario, {getState}) => {
    return await httpPut(`${baseUrl}/usuarios/${usuario.id}`, usuario, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {state.status = action.payload}
    },
    extraReducers: {
        [fetchUsuarios.pending]: (state, action) => {state.status = 'loading'},
        [fetchUsuarios.fulfilled]: (state, action) => {state.status = 'loaded'; usuariosAdapter.setAll(state, action.payload);},
        [fetchUsuarios.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar usuarios: ' + action.error.message},        
        [deleteUsuarioServer.fulfilled]: (state, action) => {state.status = 'deleted'; usuariosAdapter.removeOne(state, action.payload);},
        [deleteUsuarioServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir usuario: ' + action.error.message},
        [addUsuarioServer.fulfilled]: (state, action) => {state.status = 'saved'; usuariosAdapter.addOne(state, action.payload);},
        [addUsuarioServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar usuario: ' + action.error.message},        
        [updateUsuarioServer.fulfilled]: (state, action) => {state.status = 'saved'; usuariosAdapter.upsertOne(state, action.payload);},
        [updateUsuarioServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar usuario: ' + action.error.message},
    }
})

export const { setStatus } = usuariosSlice.actions

export default usuariosSlice.reducer

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuariosById,
    selectIds: selectUsuariosIds
} = usuariosAdapter.getSelectors(state => state.usuarios)
    