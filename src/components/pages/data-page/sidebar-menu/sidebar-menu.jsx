import React from 'react'
import styles from './sidebar-menu.module.scss'

function SidebarMenu(props) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Exercises</li>
        <li className={styles.listItem}>Users</li>
      </ul>
    </div>
  )
}

export default SidebarMenu