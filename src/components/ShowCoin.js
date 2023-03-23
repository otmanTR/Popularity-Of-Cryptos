import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import CoinInfo from './CoinInfo';
// import { getCoins } from '../redux/coins/coinsSlice';

const ShowCoin = (props) => {
  // const coins = useSelector((state) => state.coins);
  // const dispatch = useDispatch();
  const { coinParams } = useParams();
  const { coinsInfo } = props;
  // useEffect(() => {
  //   if (coins.length === 0) {
  //     dispatch(getCoins());
  //   }
  // }, [coins, dispatch]);
  const oneCoin = [...coinsInfo.filter((coin) => coin.id === coinParams.id)];
  return (
    <ul className="details-ul">
      {oneCoin && oneCoin.map((coin) => (
        <CoinInfo
          key={coin.id}
          image={coin.image}
          price={coin.currentPrice}
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

ShowCoin.propTypes = {
  coinsInfo: PropTypes.string.isRequired,
};

export default ShowCoin;
