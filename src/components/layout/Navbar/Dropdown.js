import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const MenuItems = [
    {
      title: 'Preparing for Wildfire',
      path: '/preparing-for-wildfire',
      cName: 'dropdown-link',
    },
    {
      title: "Today's Fire Weather",
      path: 'https://www.sdgeweather.com/',
      cName: 'dropdown-link',
    },
    {
      title: 'Current Active Fires',
      path: 'https://www.fire.ca.gov/incidents/',
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

export default Dropdown;
