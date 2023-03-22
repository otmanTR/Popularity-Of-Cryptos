import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coin: 'usd',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateCoin: (state, { payload }) => ({
      ...state,
      status: 'idle',
      coin: payload,
    }),
  },
});

export const { updateCurrency } = filterSlice.actions;
export default filterSlice.reducer;