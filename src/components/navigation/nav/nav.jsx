import React from 'react';
import NavLink from 'components/navigation/nav-link/nav-link.jsx'
import styles from './nav.module.scss'
import { AuthConsumer } from "components/context/auth-context/auth-context"
import NavButton from "components/navigation/nav-button/nav-button";
import Logo from "components/ui-components/logo/logo";

function Navigation() {
  return (
    <AuthConsumer>
      {({ logout }) => (
        <nav className={styles.navContainer}>
          <Logo/>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to={"/data"}>
            Data
          </NavLink>
          <NavButton eventFunction={logout}>
            Sign out
          </NavButton>
        </nav>
      )}
    </AuthConsumer>
  )
}

export default Navigation