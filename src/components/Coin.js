import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coin = ({
  name, price, symbol, image, id,
}) => (
  <Link to={`/coin/${id}`} className="link">
    <li className="coin">
      <img className="coinImage" src={image} alt={image} />
      <h2 className="coinName">
        {name}
        <br />
        {symbol}
      </h2>
      <p className="coinPrice">
        price:
        {price}
        $
      </p>
    </li>
  </Link>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Coin;
