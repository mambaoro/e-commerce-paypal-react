/**
 *
 * NavBar
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import logo from '../../images/logo.svg';

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

function NavBar() {
  return (
    <div>
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button type="button">
            <span className="mr-2">
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            cart
          </Button>
        </Link>
      </Nav>
    </div>
  );
}

NavBar.propTypes = {};

export default memo(NavBar);
