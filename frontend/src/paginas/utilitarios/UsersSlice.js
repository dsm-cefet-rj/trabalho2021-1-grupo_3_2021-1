import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import { httpGet, httpPost }  from '../../utils'
import {baseUrl} from '../../baseUrl'

const userAdapter = createEntityAdapter();
  
const initialState = userAdapter.getInitialState({
  status: "not_loaded",
  error: null,
});

export const fetchLogin = createAsyncThunk("database/fetchLogin", async () => {
  return await httpGet(`${baseUrl}/users/login`);
});

export const addUserServer = createAsyncThunk(
  "database/addUserServer",
  async (login) => {
    return await httpPost(`${baseUrl}/users/signup`, login);
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: {
    [fetchLogin.pending]: (state, action) => {
      state.status = "logging_in";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.status = "logged_in";
      userAdapter.setAll(state, action.payload);
    },
    [fetchLogin.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addUserServer.pending]: (state, action) => {
      state.status = "loading";
    },
    [addUserServer.fulfilled]: (state, action) => {
      state.status = "saved";
      userAdapter.addOne(state, action.payload);
    },
  },
});

export default usersSlice.reducer;

export const { selectAll: loginServer } = userAdapter.getSelectors(
  (state) => state.logins
);