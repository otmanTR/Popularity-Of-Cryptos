import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&page=USD';

export const getCoins = createAsyncThunk('getcoin/info', async () => {
  const response = await axios.get(url);
  const coin = Object.keys(response.data).map((key) => ({
    id: response.data[key].id,
    symbol: response.data[key].symbol,
    name: response.data[key].name,
    image: response.data[key].image,
    price: response.data[key].current_price,
    marketCap: response.data[key].market_cap,
    marketCapRank: response.data[key].market_cap_rank,
    fullyDilutedValuation: response.data[key].fully_diluted_valuation,
    totalVolume: response.data[key].total_volume,
    high24h: response.data[key].high_24h,
    low24h: response.data[key].low_24h,
    priceChange24h: response.data[key].price_change_24h,
    priceChangePercentage24h: response.data[key].price_change_percentage_24h,
    marketCapChange24h: response.data[key].market_cap_change_24h,
    marketCapChangePercentage24h: response.data[key].market_cap_change_percentage_24h,
    totalSupply: response.data[key].total_supply,
  }));
  return coin;
});

const initialState = [];

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCoins.fulfilled,
      (state, action) => action.payload,
    );
  },

});

export default coinsSlice.reducer;
