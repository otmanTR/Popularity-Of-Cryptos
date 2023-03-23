import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowCoin from './ShowCoin';
import { getCoins } from '../redux/coins/coinsSlice';

const CoinPage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <div className="coin-items">
      <div className="main-container-details">
        <a className="back-pointer" href="/">
          <i className="fa-solid fa-left-long" />
        </a>
        <h2 className="details-sec">Details</h2>
      </div>
      <ShowCoin coins={coins} />
    </div>
  );
};

export default { CoinPage };
