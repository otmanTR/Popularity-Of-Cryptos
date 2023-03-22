import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { showModal, coinDetails } from '../redux/coins/coinDetailSlice';

const Navbar = ({ type }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.details);

  const clickModal = () => {
    dispatch(showModal());
  };

  const clickReset = () => {
    if (status === 'idle') {
      dispatch(coinDetails());
    }
  };
  return (
    <div className="navbar">
      <div className="left-header">
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </NavLink>
        <h3 className="date">2023</h3>
      </div>
      <h2 className="currency">{type === 'home' ? 'CryptoMetrics' : id}</h2>
      <div className="right-header">
        <button
          type="button"
          className="icon"
          onClick={() => {
            clickModal();
            clickReset();
          }}
        >
          filter
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Navbar;
