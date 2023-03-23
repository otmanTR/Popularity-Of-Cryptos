import PropTypes from 'prop-types';
import React from 'react';

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
}) => (
  <>
    <div>
      <div>
        <img className="coinImage" src={image} alt={image} />
      </div>
      <div className="infoText">
        <p>Crypto Coin Info:</p>
      </div>
      <ul className="detailUl">
        <li className="detail">
          <span className="coinName">Name:</span>
          <span className="coinDetails">
            {name}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Symbol: </span>
          <span className="coinDetails">
            {symbol}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Price: </span>
          <span className="coinDetails">
            {price}
            $
          </span>
        </li>
        <li className="detail-">
          <span className="coinNamee">Market Cap:</span>
          <span className="coinDetails">
            {marketCap}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Market Cap Rank:</span>
          <span className="coinDetails">
            {marketCapRank}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Total Volume:</span>
          <span className="coinDetails">
            {totalVolume}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Highest 24h:</span>
          <span className="coinDetails">
            {high24h}
          </span>
        </li>
        <li className="detail-each-li">
          <span className="coinName">Lowest 24h</span>
          <span className="coinDetails">
            {low24h}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Price Change 24h:</span>
          <span className="coinDetails">
            {priceChange24h}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Market Cap Change</span>
          <span className="coinDetails">
            {marketCapChange24h}
          </span>
        </li>
        <li className="detail-">
          <span className="coinName">Total Supply:</span>
          <span className="coinDetails">
            {totalSupply}

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
