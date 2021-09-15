import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './paginas/utilitarios/ProdutosSlice'
import pedidosReducer from './paginas/utilitarios/PedidosSlice'
import servicosReducer from './paginas/utilitarios/ServicosSlice'

export const store = configureStore({
    reducer: {
      produtos: produtosReducer,
      pedidos: pedidosReducer,
      servicos: servicosReducer,
    }
})