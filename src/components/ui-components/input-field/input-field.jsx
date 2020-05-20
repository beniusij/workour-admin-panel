import React from 'react'
import styles from './input-field.module.scss'
import PropTypes from 'prop-types'

const InputField = (props) => {
	return (
		<div className={styles.formControl}>
			<label
				htmlFor={props.name}
				className={styles.label}
		 	>
			 	{props.name}
		 	</label>
			<input 
				type={props.type} 
				name={props.name} 
				className={styles.input}
			/>
		</div>
	)
}

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['email', 'password', 'number', 'reset', 'text', 'url'])
}

InputField.defaultProps = {
	name: 'Input field',
	type: 'text'
}

export default InputField