import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'


const singupAdapter = createEntityAdapter();

const initialState = singupAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const deleteUsuarioServer = createAsyncThunk('singup/deleteUsuarioServer', async (idUsuario, {getState}) => {
    await httpDelete(`${baseUrl}/users/singup/${idUsuario}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idUsuario;
});

export const addUsuarioServer = createAsyncThunk('singup/addUsuarioServer', async (usuario, {getState}) => {
    return await httpPost(`${baseUrl}/users/singup`, usuario, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateUsuarioServer = createAsyncThunk('singup/updateUsuarioServer', async (usuario, {getState}) => {
    return await httpPut(`${baseUrl}/users/singup/${usuario.id}`, usuario, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const singupSlice = createSlice({
    name: 'singup',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {state.status = action.payload}
    },
    extraReducers: {
        [deleteUsuarioServer.fulfilled]: (state, action) => {state.status = 'deleted'; singupAdapter.removeOne(state, action.payload);},
        [deleteUsuarioServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir usuario: ' + action.error.message},
        [addUsuarioServer.fulfilled]: (state, action) => {state.status = 'saved'; singupAdapter.addOne(state, action.payload);},
        [addUsuarioServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar usuario: ' + action.error.message},        
        [updateUsuarioServer.fulfilled]: (state, action) => {state.status = 'saved'; singupAdapter.upsertOne(state, action.payload);},
        [updateUsuarioServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar usuario: ' + action.error.message},
    }
})

export const { setStatus } = singupSlice.actions

export default singupSlice.reducer

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuariosById,
    selectIds: selectUsuariosIds
} = singupAdapter.getSelectors(state => state.singup)
    