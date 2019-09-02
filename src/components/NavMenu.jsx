import React from 'react';
import {Link} from 'react-router-dom';

function NavMenu() {
  return (
    <nav>
      <Link to="/">
        Dashboard
      </Link>
    </nav>
  )
}

export default NavMenu;