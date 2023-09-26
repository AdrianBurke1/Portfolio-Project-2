import React from 'react';
import './Navbar.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
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
      <ul className="nav-links">
        <li>
          <Link to="/newgames">New Games</Link>
        </li>
        <li>
          <Link to="/addgames">Add Games</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
