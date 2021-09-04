import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './paginas/ProdutosSlice'
import pedidosReducer from './paginas/PedidosSlice'

export const store = configureStore({
    reducer: {
      produtos: produtosReducer,
      pedidos: pedidosReducer,
    }
})