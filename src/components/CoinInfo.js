import PropTypes from 'prop-types';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import CoinInfo from './CoinInfo';
// import { getCoins } from '../redux/coins/coinsSlice';

const CoinInfo = ({
  image,
  price,
  name,
  symbol,
  marketCap,
  marketCapRank,
  totalVolume,
  high24h,
  low24h,
  priceChange24h,
  marketCapChange24h,
  totalSupply,
  // key={coin.id}
  // image={coin.image}
  // price={coin.currentPrice}
  // name={coin.name}
  // symbol={coin.symbol}
  // marketCap={coin.symbol}
  // marketCapRank={coin.marketCap}
  // totalVolume={coin.totalVolume}
  // high24h={coin.high24h}
  // low24h={coin.low24h}
  // priceChange24h={coin.priceChange24h}
  // marketCapChange24h={coin.marketCapChange24h}
  // marketCapChangePercentage24h={coin.marketCapChangePercentage24h}
  // totalSupply={coin.totalSupply}
}) => (
  <>
    <div data-testid="Details-1" className="detail-page-all">
      <div className="coin-img-sec">
        <img className="coin-img" src={image} alt={image} />
      </div>
      <div className="info-text">
        <p>Crypto Coin Info:</p>
      </div>
      <ul className="detail-ul-">
        <li className="detail-">
          <span className="coin-name">Name:</span>
          <span className="coin-res">
            {name}
            {' '}
            <i className="fa-solid fa-circle-arrow-right" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Symbol: </span>
          <span className="coin-res">
            {symbol}
            {' '}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Price: </span>
          <span className="coin-res">
            {price}
            {' '}
            $
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap:</span>
          <span className="coin-res">
            {marketCap}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap Rank:</span>
          <span className="coin-res">
            {marketCapRank}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Total Volume:</span>
          <span className="coin-res">
            {totalVolume}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Highest 24h:</span>
          <span className="coin-res">
            {high24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-each-li">
          <span className="coin-name">Lowest 24h</span>
          <span className="coin-res">
            {low24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Price Change 24h:</span>
          <span className="coin-res">
            {priceChange24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap Change</span>
          <span className="coin-res">
            {marketCapChange24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Total Supply:</span>
          <span className="coin-res">
            {totalSupply}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
      </ul>
    </div>
  </>
);

CoinInfo.propTypes = {

  marketCap: PropTypes.string.isRequired,
  marketCapRank: PropTypes.string.isRequired,
  totalVolume: PropTypes.string.isRequired,
  high24h: PropTypes.string.isRequired,
  low24h: PropTypes.string.isRequired,
  priceChange24h: PropTypes.string.isRequired,
  marketCapChange24h: PropTypes.string.isRequired,
  totalSupply: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CoinInfo;
