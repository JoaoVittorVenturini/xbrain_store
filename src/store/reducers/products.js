import { createSlice } from '@reduxjs/toolkit';
import produto01 from 'assets/produto-01.jpeg';
import produto02 from 'assets/produto-02.jpeg';
import produto03 from 'assets/produto-03.jpeg';
import produto04 from 'assets/produto-04.jpeg';
import produto05 from 'assets/produto-05.jpeg';
import produto06 from 'assets/produto-06.jpeg';
import produto07 from 'assets/produto-07.jpeg';
import produto08 from 'assets/produto-08.jpeg';

const initialState = [
  {
    id: 1,
    img: produto01,
    name: 'AirPods Apple Fones de ouvido',
    price: 1499,
    maxQuantidade: 7,
  },
  {
    id: 2,
    img: produto02,
    name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
    price: 299,
    maxQuantidade: 13,
  },
  {
    id: 3,
    img: produto03,
    name: 'Apple Pencil',
    price: 729,
    maxQuantidade: 3,
  },
  {
    id: 4,
    img: produto04,
    name: 'Magic Mouse 2 - Prateado',
    price: 549,
    maxQuantidade: 4,
  },
  {
    id: 5,
    img: produto05,
    name: 'Caixa prateada de alumínio com pulseira esportiva branca',
    price: 2899,
    maxQuantidade: 6,
  },
  {
    id: 6,
    img: produto06,
    name: 'Cabo de lightning para USB (1m)',
    price: 149,
    maxQuantidade: 17,
  },
  {
    id: 7,
    img: produto07,
    name: 'Smart Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)',
    price: 1099,
    maxQuantidade: 10,
  },
  {
    id: 8,
    img: produto08,
    name: 'Carregador USB de 5W Apple',
    price: 149,
    maxQuantidade: 22,
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
});

export default productsSlice.reducer;