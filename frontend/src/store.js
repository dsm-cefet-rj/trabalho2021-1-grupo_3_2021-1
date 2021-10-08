import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './paginas/utilitarios/ProdutosSlice'
import pedidosReducer from './paginas/utilitarios/PedidosSlice'
import servicosReducer from './paginas/utilitarios/ServicosSlice'
import loginReducer from './paginas/utilitarios/LoginSlice'
import UserReducer from './paginas/utilitarios/UsersSlice'

export const store = configureStore({
    reducer: {
      produtos: produtosReducer,
      pedidos: pedidosReducer,
      servicos: servicosReducer,
      logins: loginReducer,
      users: UserReducer,
    }
})