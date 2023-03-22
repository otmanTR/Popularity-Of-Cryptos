import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsSlice';
import detailsReducer from './coins/coinDetailSlice';
import filterReducer from './coins/filterSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    details: detailsReducer,
    filter: filterReducer,
  },
});

export default store;
