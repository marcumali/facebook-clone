import React from 'react'
import RButton from 'react-bootstrap/Button'

const Button: React.VFC = ({children, ...props}: Props) => {
	return (
		<RButton className="w-100 mb-4" {...props}>{children}</RButton>
	)
}

interface Props {
	children: React.ReactNode
}

export default Button
