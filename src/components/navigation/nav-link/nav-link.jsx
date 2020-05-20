import React from 'react'
import {Link} from 'react-router-dom'
import styles from './nav-link.module.scss'

const NavLink = (props) => {
	const isActive = window.location.pathname === props.to
	let classes = styles.navLink

	if (isActive) {
		classes += " " + styles.navLinkActive
	}

	return (
		<Link 
			to={props.to}
			className={classes}
		>
			{props.children}
		</Link>
	)
}

export default NavLink