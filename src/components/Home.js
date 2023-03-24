import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/coins/coinsSlice';
import Coins from './Coins';
import { NavBar } from './Navigation';

export const Home = () => {
  const coin = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <NavBar />
          </div>
          <div className="searchBox">
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="coinItems">
        <Coins coins={coin.filter((coin) => (search.toLowerCase() === '' ? coin : coin.name.toLowerCase().includes(search.toLowerCase())))} />

      </div>
    </div>
  );
};

export default { Home };
