import React from 'react'
import PropTypes from 'prop-types'
import styles from './site-title.module.scss'

function SiteTitle(props) {
  return (
    <h1 className={styles.title}>{props.children}</h1>
  )
}

SiteTitle.propTypes = {
  children: PropTypes.string.isRequired
}

SiteTitle.defaultProps = {
  children: 'Site Title Component'
}

export default SiteTitle