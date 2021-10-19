<<<<<<< HEAD
import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpGet, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentToken: null,
    id:null
    /* o array user foi removido do state inicial, será criado pelo adapter */
});


export const loginServer = createAsyncThunk('users/loginServer', async (login) => {
    return await httpPost(`${baseUrl}/users/login`, login);
});

export const logoutServer = createAsyncThunk('users/logoutServer', async () => {
    return await httpGet(`${baseUrl}/users/logout`);
});

export const loginSlice = createSlice({
    name: 'logins',
    initialState: initialState,
    extraReducers: {
       [loginServer.pending]: (state, action) => {state.status = 'trying_login'},
       [loginServer.fulfilled]: (state, action) => {state.status = 'logged_in'; loginAdapter.addOne(state, action.payload); state.currentToken = action.payload.token; state.id = action.payload.id},
       [logoutServer.pending]: (state, action) => {state.status = 'trying_logout'},
       [logoutServer.fulfilled]: (state, action) => {state.status = 'logged_out'; loginAdapter.addOne(state, action.payload); state.currentToken = undefined;  state.id = undefined},
 
    },
})

export default loginSlice.reducer

export const {
    selectAll: selectAllLogin,
} = loginAdapter.getSelectors(state => state.login)
=======
import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpGet, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentToken: null,
    id:null
    /* o array user foi removido do state inicial, será criado pelo adapter */
});


export const loginServer = createAsyncThunk('users/loginServer', async (login) => {
    return await httpPost(`${baseUrl}/users/login`, login);
});

export const logoutServer = createAsyncThunk('users/logoutServer', async () => {
    return await httpGet(`${baseUrl}/users/logout`);
});

export const loginSlice = createSlice({
    name: 'logins',
    initialState: initialState,
    extraReducers: {
       [loginServer.pending]: (state, action) => {state.status = 'trying_login'},
       [loginServer.fulfilled]: (state, action) => {state.status = 'logged_in'; loginAdapter.addOne(state, action.payload); state.currentToken = action.payload.token; state.id = action.payload.id},
       [logoutServer.pending]: (state, action) => {state.status = 'trying_logout'},
       [logoutServer.fulfilled]: (state, action) => {state.status = 'logged_out'; loginAdapter.addOne(state, action.payload); state.currentToken = undefined;  state.id = undefined},
 
    },
})

export default loginSlice.reducer

export const {
    selectAll: selectAllLogin,
} = loginAdapter.getSelectors(state => state.login)
>>>>>>> 8a562d8ec6e6db9238607247af5bfe9ee4c22e04
