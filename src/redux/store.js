import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsSlice';
import detailsReducer from './coins/coinDetailSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    details: detailsReducer,
  },
});

export default store;
