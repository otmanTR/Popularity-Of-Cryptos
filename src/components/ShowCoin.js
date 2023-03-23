import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CoinInfo from './CoinInfo';
import { getCoins } from '../redux/coins/coinsSlice';

const ShowCoin = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  }, [coins, dispatch]);

  const oneCoin = coins.filter((coin) => coin.id === id);

  return (
    <ul className="details-ul">
      {oneCoin && oneCoin.map((coin) => (
        <CoinInfo
          key={coin.id}
          image={coin.image}
          price={coin.price}
          name={coin.name}
          symbol={coin.symbol}
          marketCap={coin.symbol}
          marketCapRank={coin.marketCap}
          totalVolume={coin.totalVolume}
          high24h={coin.high24h}
          low24h={coin.low24h}
          priceChange24h={coin.priceChange24h}
          marketCapChange24h={coin.marketCapChange24h}
          marketCapChangePercentage24h={coin.marketCapChangePercentage24h}
          totalSupply={coin.totalSupply}
        />
      ))}
    </ul>
  );
};

export default ShowCoin;
