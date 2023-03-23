import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <>
    <div>
      <Link to="/" className="home-btn">
        <FaChevronLeft />
      </Link>
    </div>
  </>
);

export default { NavBar };
