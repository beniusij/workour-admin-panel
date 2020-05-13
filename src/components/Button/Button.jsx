import React from 'react'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

const Button = (props) => {
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

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  disabled: false
}

export default Button