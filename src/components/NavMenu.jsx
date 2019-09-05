import React from 'react';
import {Link} from 'react-router-dom'

function NavMenu() {
  return (
    <nav>
      <Link to="/">
        Dashboard
      </Link>
      <Link to='/logout'>
        Logout
      </Link>
    </nav>
  )
}

export default NavMenu