import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import FSCLogo from './FSC-logo.svg';

import { Button } from '../Button/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Dropdown from './Dropdown';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    // Only have drop down on Tablet or Higher
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={FSCLogo} alt="Fire Safe Council Logo" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <FaTimes style={{ color: '#346504' }} />
              ) : (
                <FaBars style={{ color: '#346504' }} />
              )}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  to="/resources"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Resources <i className="fas fa-caret-down" />
                </Link>
                {dropdown && <Dropdown />}
              </li>

              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  News & Events
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/contact" className="btn-link">
                    <Button buttonStyle="btn--outline" buttonColor="green">
                      CONTACT
                    </Button>
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button
                      buttonStyle="btn--primary"
                      buttonSize="btn--mobile"
                      buttonColor="primary"
                    >
                      CONTACT
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
}

export default Navbar;
