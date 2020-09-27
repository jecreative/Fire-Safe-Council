import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiFireShield } from 'react-icons/gi';

import { Button } from '../layout/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiFireShield className="navbar-icon" />
              UC | FSC
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
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
              <li className="nav-item">
                <Link
                  to="/resources"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Resources
                </Link>
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
                    <Button buttonStyle="btn--outline">CONTACT</Button>
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      CONTACT
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </Fragment>
  );
}

export default Navbar;
