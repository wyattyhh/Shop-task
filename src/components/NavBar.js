import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {calculate} from '../methods/calculate';

function NavBar(props) {
  const {cartItems} = props;
  const cartNum = calculate(cartItems);

  return (
    <div className="nav-bar">
      <Link to={ {pathname: '/', state: {cartItems}} }>
        <div className="nav-logo">Energy Station</div>
      </Link>
      <Link to={ {pathname: '/cart', state: {cartItems}} }>
        <div className="nav-cart">Cart: { cartNum }</div>
      </Link>
    </div>
  );
}

export default NavBar;