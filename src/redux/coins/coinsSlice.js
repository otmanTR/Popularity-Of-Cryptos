import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coinlore.net/api/tickers/';

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  try {
    const response = await axios.get(url);
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.coinList = action.payload;
      state.status = 'succeeded';
    });
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(getCoins.pending, (state) => ({
  //       ...state,
  //       status: 'loading',
  //     }))
  //     .addCase(getCoins.fulfilled, (state, action) => {
  //       const newState = { ...state };
  //       const newArray = [];
  //       action.payload.forEach((data) => {
  //         newArray.push({
  //           id: data.id,
  //           name: data.name,
  //           symbol: data.symbol,
  //           // volume: key.volume24,
  //           // rank: key.rank,
  //           // price: key.price_usd,
  //         });
  //       });
  //       newState.coinList = [...newArray];
  //       newState.toArray = false;
  //       return newState;
  //     })
  //     .addCase(getCoins.rejected, (state, action) => ({
  //       ...state,
  //       status: 'failed',
  //       error: [...state.error, action.error.message],
  //     }));
  // },

});

export const selectCoins = (state) => state.coins;
export default getCoinsSlice.reducer;
