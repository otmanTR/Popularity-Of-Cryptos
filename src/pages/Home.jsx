import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectCoins, getCoins } from '../redux/coins/coinsSlice';
import Coin from '../components/Coins';

export default function Coinlist() {
  const dispatch = useDispatch();
  const { status, coinList } = useSelector((store) => store.details);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCoins());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>loading...</div>;
console.log(coinList);
  return (
    <>
      <h2>Popularity of Cryptos in aa </h2>
      <div>
        {coinList.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
          />
        ))}
      </div>
    </>
  );
}
