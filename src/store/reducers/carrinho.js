import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho: (state, { payload }) => {
      const temProduto = state.some(product => product.id === payload);
      if (!temProduto) return [
        ...state,
        {
          id: payload,
          quantidade: 1,
        }
      ];
      return state.filter(product => product.id !== payload);
    },
  },
});

export const { adicionarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;