import React from 'react'
import styles from '../nav-link/nav-link.module.scss'

const NavButton = (props) => {
  return (
    <button
      onClick={props.eventFunction}
      className={styles.navButton}
    >
      {props.children}
    </button>
  )
}

export default NavButton