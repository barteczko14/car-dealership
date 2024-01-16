import React from 'react'
import classes from './Button.module.css'
const Button = ({ children, btnStyle, ...props }) => {
	const buttonStyle = btnStyle
	return (
		<button {...props} className={classes[buttonStyle]}>
			{children}
		</button>
	)
}

export default Button
