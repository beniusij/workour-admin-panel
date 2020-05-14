import React from 'react'
import styles from './notification.module.scss'
import PropTypes from 'prop-types'

const Notification = (props) => {
  return (
    <p
      className={styles.failure}
    >
      {props.message}
    </p>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
}

Notification.defaultProps = {
  message: "Hi! I'm a notification!"
}

export default Notification