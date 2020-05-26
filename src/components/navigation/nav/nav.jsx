import React, { useState } from 'react';
import NavLink from 'components/navigation/nav-link/nav-link.jsx'
import styles from './nav.module.scss'
import { AuthConsumer } from "components/context/auth-context/auth-context"
import NavButton from "components/navigation/nav-button/nav-button";
import Logo from "components/ui-components/logo/logo";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  let topBar = showMenu
    ? `${styles.burgerBarTop} ${styles.burgerBarTopToggled}`
    : styles.burgerBarTop

  let middleBar = showMenu
    ? styles.burgerBarMiddleToggled
    : styles.burgerBarMiddle

  let bottomBar = showMenu
    ? `${styles.burgerBarBottom} ${styles.burgerBarBottomToggled}`
    : styles.burgerBarBottom

  return (
    <AuthConsumer>
      {({ logout }) => (
        <nav className={styles.navContainer}>
          <div className={styles.controlsGroup}>
            <Logo/>

            <div onClick={toggleMenu} className={styles.burgerButton}>
              <div className={topBar}></div>
              <div className={middleBar}></div>
              <div className={bottomBar}></div>
            </div>
          </div>

          <div className={styles.linksGroup}>
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