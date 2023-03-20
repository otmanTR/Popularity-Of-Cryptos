import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coinlore.net/api/tickers/ (First 100 Coins)';

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
};

export const getCoinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCoins.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCoins.fulfilled, (state, action) => {
        const newState = { ...state };
        const newArray = [];
        action.payload.forEach((key) => {
          newArray.push({
            id: key.id,
            name: key.name,
            symbol: key.symbol,
            volume: key.volume24,
            rank: key.rank,
          });
        });
        newState.coinList = [...newArray];
        newState.status = 'loaded';
        return newState;
      })
      .addCase(getCoins.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export default getCoinsSlice.reducer;
