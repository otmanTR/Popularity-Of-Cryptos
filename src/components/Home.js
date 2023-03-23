import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/coins/coinsSlice';
import Coins from './Coins';
import { NavBar } from './Navigation';

export const Home = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <div className="all-content">
      <div className="main-container">
        <div className="searchSection">
          <div>
            <NavBar />
          </div>
          <div className="searchBox">
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
            />
            <button
              aria-label="volume"
              type="button"
              className="searchButton"
              onClick={() => setSearch(search)}
            />
          </div>
        </div>
      </div>
      <div className="crypto-items">
        <Coins coins={coins.filter((coin) => (search.toLowerCase() === '' ? coin : coin.name.toLowerCase().includes(search.toLowerCase())))} />

      </div>
    </div>
  );
};

export default { Home };
