import React from 'react'
import BrandLogo from './dumbbell-solid.svg'

/**
 * Brand logo usually used only in navigation bar
 *
 * @returns {*}
 * @constructor
 */
export default function Logo() {
  console.log(BrandLogo)
  return (
    <img src={BrandLogo} alt={"Brand logo"} />
  )
}