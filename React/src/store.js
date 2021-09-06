import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './paginas/ProdutosSlice'
import pedidosReducer from './paginas/PedidosSlice'
import servicosReducer from './paginas/ServicosSlice'

export const store = configureStore({
    reducer: {
      produtos: produtosReducer,
      pedidos: pedidosReducer,
      servicos: servicosReducer,
    }
})