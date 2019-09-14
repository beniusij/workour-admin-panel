import React from 'react'
import styles from './InputField.module.scss'

const MandatoryInputField = (props) => {
	let name = props.name + "*"
	return (
		<div className={styles.formControl}>
			<label htmlFor={props.name}>{name}</label>
			<input 
				type={props.type} 
				name={props.name} 
				className={styles.input}
				required
			/>
		</div>
	)
}

export default MandatoryInputField