import React, { useState } from 'react';
import NavLink from 'components/navigation/nav-link/nav-link.jsx'
import styles from './nav.module.scss'
import { AuthConsumer } from "components/context/auth-context/auth-context"
import NavButton from "components/navigation/nav-button/nav-button";
import Logo from "components/ui-components/logo/logo";
import BurgerButton from "../burger-button/burger-button";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  let linksGroupStyle = showMenu
    ? styles.linksGroup
    : styles.linksGroupHidden

  return (
    <AuthConsumer>
      {({ logout }) => (
        <nav className={styles.navContainer}>
          <div className={styles.controlsGroup}>
            <Logo/>

            <BurgerButton
              showMenu={showMenu}
              toggleMenu={toggleMenu}
            />
          </div>

          <div className={linksGroupStyle}>
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to={"/data"}>
              Data
            </NavLink>
            <NavButton eventFunction={logout}>
              Sign out
            </NavButton>
          </div>

        </nav>
      )}
    </AuthConsumer>
  )
}

export default Navigation