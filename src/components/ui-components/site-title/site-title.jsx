import React from 'react'
import styles from './site-title.module.scss'

function SiteTitle(props) {
  return (
    <h1 className={styles.title}>{props.children}</h1>
  )
}

export default SiteTitle