import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GamesIcon from '@mui/icons-material/Games'; // Import GamesIcon

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> {/* Link to the home page */}
          <a className="logo" href="#">
            <span>G</span>
            <span>a</span>
            <span>m</span>
            <span>i</span>
            <span>f</span>
            <span className='red'>y</span>
          </a>
        </Link>
      </div>

      {/* Add the hamburger button */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Create the navigation links */}
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li>
          <Link to="/newgames" onClick={toggleMenu}>Games</Link>
        </li>
        <li>
          <Link to="/aboutcontact" onClick={toggleMenu}>About</Link> {/* Update the link */}
        </li>
        <li>
          {/* Link to the "Add Games" page */}
          <Link to="/addgames" onClick={toggleMenu}>
            <ShoppingCartIcon /> {/* Use the ShoppingCartIcon here */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
