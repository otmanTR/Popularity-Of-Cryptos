import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/coins/coinsSlice';
import Coin from './Coin';

const Coins = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  // console.log(coin)
  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  }, [coins, dispatch]);

  return (

    <div className="main">

      <h1 className="title">Crypto Coins</h1>

      <ul className="homeCoinList">
        {coins.map((coin) => (
          <Coin
            key={coin.name}
            id={coin.id}
            name={coin.name}
            price={coin.price}
            symbol={coin.symbol}
            image={coin.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Coins;
