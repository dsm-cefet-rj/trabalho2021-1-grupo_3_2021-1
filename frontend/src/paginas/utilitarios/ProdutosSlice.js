import {
    getProdutos,
    deleteProduto,
    registerProduto,
    updateProduto,
} from '../../services/produto_service';

import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchProduto = createAsyncThunk('auth/fetchProduto', async () => {
    try {
        const response = await getProdutos();
        return response;
    } catch (error) {
        throw error;
    }
});

export const createProduto = createAsyncThunk(
    'auth/CreateProduto',
    async ({ name, type, company, quantity, date, price, description }) => {
        try {
            const response = await registerProduto(
                name,
                type,
                company,
                quantity,
                date,
                price,
                description
            );
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const upProduto = createAsyncThunk(
    'auth/updateProduto',
    async ({ id, slug, name, type, quantity, date, price, description }) => {
        try {
            const response = await updateProduto(
                slug,
                name,
                type,
                quantity,
                date,
                price,
                description
            );

            const obj = {
                slug: response.updatedProduto.slug,
                name: response.updatedProduto.name,
                type: response.updatedProduto.type,
                quantity: response.updatedProduto.quantity,
                date: response.updatedProduto.date,
                price: response.updatedProduto.date,
                description: response.updatedProduto.description,
            };
            return { id, changes: obj };
        } catch (error) {
            throw error;
        }
    }
);

export const delProduto = createAsyncThunk(
    'auth/delProduto',
    async ({ slug, id }) => {
        try {
            await deleteProduto(slug);
            return id;
        } catch (error) {
            throw error;
        }
    }
);

export const produtoAdapter = createEntityAdapter({
    selectId: (entity) => entity._id,
});

const initialState = { produto: [], error: null, status: null };

const produtoSlice = createSlice({
    name: 'produto',
    initialState,
    reducers: {
        // setAllProdutos: produtoAdapter.setAll,
        removeProduto: produtoAdapter.removeOne,
        setManyProduto: produtoAdapter.addMany,
        updateProdutos: produtoAdapter.updateMany,
    },
    extraReducers: {
        [fetchProduto.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchProduto.fulfilled]: (state, action) => {
            state.status = 'loaded';
            produtoAdapter.setAll(state, action.payload.produtos);
        },
        [fetchProduto.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [createProduto.pending]: (state, action) => {
            state.status = 'loading';
        },
        [createProduto.fulfilled]: (state, action) => {
            state.status = 'loaded';
            produtoAdapter.addOne(state, action.payload.produto);
        },
        [upProduto.pending]: (state, action) => {
            state.status = 'loading';
        },
        [upProduto.fulfilled]: (state, action) => {
            state.status = 'loaded';
            produtoAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.changes,
            });
        },
        [delProduto.pending]: (state, action) => {
            state.status = 'loading';
        },
        [delProduto.fulfilled]: (state, action) => {
            state.status = 'loaded';
            produtoAdapter.removeOne(state, action.payload);
        },
    },
});

export const { removeProduto, setManyProduto, updateProdutos } = produtoSlice.actions;

export default produtoSlice.reducer;