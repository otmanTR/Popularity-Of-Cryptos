import React from 'react';
import PropTypes from 'prop-types';

export default function Coin({
  image, name, volume, price,
}) {
  return (
    <>
      <div className="coinContainer">
        <ul>
          <li>
            <img src={image} className="image" alt="coin" />
          </li>
          <li>
            <h3>
              {' '}
              {name}
            </h3>
          </li>
          <li>
            <p>
              {price}
            </p>
          </li>
          <li>
            <p>
              {volume}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

Coin.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  volume: PropTypes.bool,
};
