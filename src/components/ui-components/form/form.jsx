import React from 'react'
import PropTypes from 'prop-types'
import styles from "./form.module.scss"
import Notification from "@bit/beniusij.ourworkout.notification"

/**
 * Form component
 *
 * @param props
 * @constructor
 */
function Form(props) {
  return (
    <div className={styles.formContainer} >
      <h2 className={styles.formTitle}>{props.title}</h2>

      {
        props.error &&
        <Notification type={"failure"} message={props.error} />
      }

      <form onSubmit={props.formFunction}>
        { props.children }
      </form>
    </div>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  formFunction: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

Form.defaultProps = {
  formFunction: () => { console.log("Form has been submitted!") },
  children: (
    <React.Fragment>
    </React.Fragment>
  )
}

export default Form