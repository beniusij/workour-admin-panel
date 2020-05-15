import React from 'react'
import styles from './notification.module.scss'
import PropTypes from 'prop-types'

const Notification = (props) => {
  return (
    <p
      className={styles[props.type]}
      type={props.type}
    >
      {props.message}
    </p>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'failure', 'notice', 'warning'])
}

Notification.defaultProps = {
  message: "Hi! I'm a notification!",
  type: "notice"
}

export default Notification