import React from 'react'
import styles from './button.module.scss'
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
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  text: 'FooBar!'
}

export default Button