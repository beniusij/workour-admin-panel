import React from 'react';
import NavLink from '../nav-link/nav-link.jsx'
import styles from './nav.module.scss'
import { AuthConsumer } from "../../../context/auth-context/auth-consumer"
import NavButton from "../nav-button/nav-button";

function NavMenu() {
  return (
    <AuthConsumer>
      {({ logout }) => (
        <nav className={styles.navContainer}>
          <NavLink to="/">
            Home
          </NavLink>
          <NavButton eventFunction={logout}>
            Sign out
          </NavButton>
        </nav>
      )}
    </AuthConsumer>
  )
}

export default NavMenu