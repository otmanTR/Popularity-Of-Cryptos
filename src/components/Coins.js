import React from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';

const Coins = (props) => {
  const { coins } = props;

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

Coins.propTypes = {
  coins: PropTypes.string.isRequired,
};
