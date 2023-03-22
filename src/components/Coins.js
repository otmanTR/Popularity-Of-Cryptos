import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const CoinCard = ({
  name,
  image,
  price,
}) => {
  const { coins } = useSelector((store) => store.details);

  return (
    <div className="coinContainer">
      <img src={image} alt={image} className="coinImage" />
      <h2 className="coinName">{name}</h2>
      <p className="price">
        Current Price:
        <span>
          {coins === 'usd' ? '$' : coins}
          {price}
        </span>
      </p>
    </div>
  );
};
CoinCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CoinCard;
