import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <img src="../../assets/fxdigitallogo.png" alt="logo" />
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
