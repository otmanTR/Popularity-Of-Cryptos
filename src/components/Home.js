import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
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
    <div className="mainContainer">
      <div>
        <h1 className="mainTitle">Choose Your Coin</h1>
        <div className="container">
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
          <div>
            <button aria-label="Mute volume" type="button" className="searchButton" onChange={(e) => setSearch(e.target.value)}>
              <FaSearch />
            </button>
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
