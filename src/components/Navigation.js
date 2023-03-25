import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <>

    <div className="navContainer">

      <div>
        <Link to="/" className="home-btn">
          <FaChevronLeft />
        </Link>
      </div>
      <div className="year"> 2023</div>
    </div>
  </>
);

export default { NavBar };
