import { Routes, Route } from 'react-router-dom';
import './App.css';
import CoinList from './components/Coins';
import store from './redux/store';
import { getCoins } from './redux/coins/coinsSlice';

const App = () => {
  store.dispatch(getCoins());
  return (
    <>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
};

export default App;
