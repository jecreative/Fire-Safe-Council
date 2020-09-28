import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function AboutDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const MenuItems = [
    {
      title: 'Mission & Vision',
      path: '/mission',
      cName: 'dropdown-link',
    },
    {
      title: 'Who We Are',
      path: '/who-we-are',
      cName: 'dropdown-link',
    },
    {
      title: 'Partners',
      path: '/partners',
      cName: 'dropdown-link',
    },
  ];

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          const { title, path, cName } = item;

          return (
            <li key={index}>
              {path.startsWith('/', [0]) ? (
                <Link
                  className={cName}
                  to={path}
                  onClick={() => setClick(false)}
                >
                  {title}
                </Link>
              ) : (
                <a
                  href={path}
                  className={cName}
                  onClick={() => setClick(false)}
                >
                  {title}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AboutDropdown;
