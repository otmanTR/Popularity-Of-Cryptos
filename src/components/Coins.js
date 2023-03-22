import React from 'react';
import PropTypes from 'prop-types';

export default function Coin({
  name,
  image,
  current_price,
}) => {
  
  return (
    <>
      <div className="coinContainer">
        <ul>
          <li>
            <h3>
              {name}
            </h3>
          </li>
          <li>
            <p>
              {symbol}
            </p>
          </li>
          <li>
            <p>
              {price}
              $
            </p>
          </li>
          <li>
            <p>
              {volume}
              $
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  // price: PropTypes.string.isRequired,
  // symbol: PropTypes.string.isRequired,
  // volume: PropTypes.string.isRequired,
};
