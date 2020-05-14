import React from 'react';
import NavLink from '../navComponents/NavLink.js'
import styles from './NavMenu.module.scss'
import { AuthConsumer } from "../../context/auth-context/auth-consumer"
import NavButton from "../navComponents/navButton";

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