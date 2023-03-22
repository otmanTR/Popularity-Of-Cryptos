import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  coinDetails, showModal, filter, updateMax, updateMin,
} from '../redux/coins/coinDetailSlice';
import CoinHome from '../components/Coins';
import Navbar from '../components/Navigation';
import './HomePage.css';

const Home = () => {
  const dispatch = useDispatch();
  const { status, modal, filteredList } = useSelector((store) => store.details);

  const clickModal = () => {
    dispatch(showModal());
  };

  const clickFilter = (first, last) => {
    dispatch(updateMin(first));
    dispatch(updateMax(last));
    dispatch(filter());
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(coinDetails());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>loading...</div>;

  return (
    <div className="home-page">
      <Navbar type="home" />
      {modal && (
        <div className="modal">
          <button
            type="button"
            onClick={() => {
              clickModal();
              clickFilter(0, 10);
            }}
          >
            $0-$10
          </button>
          <button
            type="button"
            onClick={() => {
              clickModal();
              clickFilter(11, 100);
            }}
          >
            $11-$100
          </button>
          <button
            type="button"
            onClick={() => {
              clickModal();
              clickFilter(101, 1000);
            }}
          >
            $101-$1000
          </button>
          <button
            type="button"
            onClick={() => {
              clickModal();
              clickFilter(1001, 10000);
            }}
          >
            $1001-$10000
          </button>
          <button
            type="button"
            onClick={() => {
              clickModal();
              clickFilter(10001, 100000000);
            }}
          >
            Greater than $10000
          </button>
        </div>
      )}
      <div className="details-home-container">
        {filteredList.map((coin) => (
          <NavLink key={coin.id} to={`/${coin.id}`} className="nav-link">
            <CoinHome />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
