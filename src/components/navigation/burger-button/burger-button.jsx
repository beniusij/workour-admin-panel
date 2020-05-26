import React from 'react'
import styles from "./burger-button.module.scss";
import PropTypes from 'prop-types'

function BurgerButton(props) {
  let topBar = props.showMenu
    ? `${styles.burgerBarTop} ${styles.burgerBarTopToggled}`
    : styles.burgerBarTop

  let middleBar = props.showMenu
    ? styles.burgerBarMiddleToggled
    : styles.burgerBarMiddle

  let bottomBar = props.showMenu
    ? `${styles.burgerBarBottom} ${styles.burgerBarBottomToggled}`
    : styles.burgerBarBottom

  return (
    <div onClick={props.toggleMenu} className={styles.burgerButton}>
      <div className={topBar}></div>
      <div className={middleBar}></div>
      <div className={bottomBar}></div>
    </div>
  )
}

BurgerButton.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

BurgerButton.defaultProps = {
  showMenu: false,
  toggleMenu: () => { console.log("Toggle menu") }
}

export default BurgerButton