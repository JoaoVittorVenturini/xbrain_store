import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/products';
import carrinhoSlice from './reducers/carrinho';

const store = configureStore({
  reducer: {
    products: productsSlice,
    carrinho: carrinhoSlice,
  }
});

export default store; 