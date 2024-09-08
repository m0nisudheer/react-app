import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Marquee from 'react-fast-marquee';

function Header() {
  const [navBar, setNavBar] = useState(false);
  
  const toggleNav = () => {
    setNavBar(prev => !prev);
  };

  return (
    <div>
      <div className="text">
        <Marquee speed={100}><b>Skin Science</b></Marquee>
      </div>
      <nav>
        <div className='nav'>
          <img src='https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-skin-care-logo-png-image_5774040.png' alt="Logo" />
        </div>
        <ul className={`links ${navBar ? 'active' : ''}`}>
        <li><Link to='/'>Home</Link></li>
          <li><Link to='/Shop'>Shop</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
        <div className='icon'>
          <FaSearch />
          <FaShoppingCart />
          <p className='menu' onClick={toggleNav}><TiThMenu /></p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
