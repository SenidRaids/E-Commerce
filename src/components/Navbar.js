import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <h1>React E-commerce</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
