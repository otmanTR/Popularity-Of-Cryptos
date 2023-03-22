import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coin = ({
  name, price, symbol, image,
}) => (
  <Link to={`/coin/${name}`} className="link">
    <li className="coin">
      <img className="coin-image" src={image} alt={image} />
      <h2 className="coinName">
        {name}
        <br />
        {symbol}
      </h2>
      <p>{price}</p>
    </li>
  </Link>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Coin;