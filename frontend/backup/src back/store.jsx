import { configureStore } from "@reduxjs/toolkit";
import pedidosReducer from './produtos/ProdutosSlice'

const store = configureStore  ({
    reducer: {
        pedidos: pedidosReducer
    }
})
export default store