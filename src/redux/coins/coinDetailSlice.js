import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const coinDetails = createAsyncThunk('details/coinDetails', async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  listCoin: [],
  listFiltreted: [],
  status: 'idle',
  error: null,
  modal: false,
  currency: 'usd',
  min: 0,
  max: 0,
};

const coinDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    showModal: (state) => ({
      ...state,
      modal: !state.modal,
    }),
    filter: (state) => {
      const filteredState = state.listCoin;
      const newArray = filteredState.filter((filterState) => filterState.current_price >= state.min
       && filterState.current_price <= state.max);
      state.filteredList = [...newArray];
    },
    updateMin: (state, { payload }) => {
      state.min = payload;
    },
    updateMax: (state, { payload }) => {
      state.max = payload;
    },
    resetState: (state) => ({
      ...state,
      status: 'idle',
    }),
    updateCoin: (state, { payload }) => ({
      ...state,
      status: 'idle',
      currency: payload,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(coinDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(coinDetails.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const newArray = [];
        keys.forEach((key) => {
          newArray.push(payload[key]);
        });
        state.currencyList = [...newArray];
        state.filteredList = [...newArray];
        state.status = 'successful';
      })
      .addCase(coinDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const {
  showModal, updateCoin, filter, updateMax, updateMin, resetState,
} = coinDetailsSlice.actions;
export default coinDetailsSlice.reducer;
