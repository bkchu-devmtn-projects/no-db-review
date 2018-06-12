import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="Navbar__link" to="/">
        Home
      </Link>
      <Link className="Navbar__link" to="/b">
        Test
      </Link>
      <Link className="Navbar__link" to="/c">
        Todos
      </Link>
    </div>
  );
};

export default Navbar;
