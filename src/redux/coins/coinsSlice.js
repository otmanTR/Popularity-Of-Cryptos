import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCoins = createAsyncThunk('coins/getCoins', async (id) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  coinList: [],
  status: 'idle',
  error: null,
};

export const getCoinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    selectCoins: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCoins.fulfilled, (state, { payload }) => ({
        ...state,
        coinList: payload,
        status: 'successful',
      }));
  },

});

export const { selectCoins } = getCoinsSlice.actions;
export default getCoinsSlice.reducer;
