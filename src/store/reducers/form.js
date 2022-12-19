import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '',
    name: '',
    email: '',
    genero: '',
  }
];

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    hendleFormValues: (state, { payload }) => {
      const data = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        genero: payload.genero,
      }
      state.push(data);
    }
  }
});

export const { hendleFormValues } = formSlice.actions;

export default formSlice.reducer;