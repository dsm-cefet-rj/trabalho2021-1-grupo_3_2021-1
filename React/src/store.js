import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './paginas/ProdutosSlice'

export const store = configureStore({
    reducer: {
      produtos: produtosReducer
    }
})