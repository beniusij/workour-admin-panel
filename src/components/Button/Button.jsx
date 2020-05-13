import React from 'react'
import styles from './Button.module.scss'

const Index = (props) => {

  return (
    <button
      className={styles.btn}
      type={props.type}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}

export default Index