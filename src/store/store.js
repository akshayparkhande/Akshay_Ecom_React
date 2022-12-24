import { configureStore } from '@reduxjs/toolkit'
import cartCounterReducer from '../features/counterSlice'
import productDataReducer from '../features/productSlice'

export default configureStore({
  reducer: {
    cartCounter: cartCounterReducer,
    productData: productDataReducer,
  },
})


