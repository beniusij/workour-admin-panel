import React from 'react'
import BrandLogo from './dumbbell-solid.svg'
import styles from './logo.module.scss'
import {Link} from "react-router-dom";

/**
 * Brand logo usually used only in navigation bar
 *
 * @returns {*}
 * @constructor
 */
export default function Logo() {
  return (
    <Link className={styles.logoLink} to={"/"}>
      <img className={styles.logoImg} src={BrandLogo} alt={"OurWorkout Logo"} />
    </Link>
  )
}