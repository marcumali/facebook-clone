import React from 'react'

const Layout = ({children}: Props) => {
	return (
		<div className="d-flex flex-column h-100">
			{children}
		</div>
	)
}

interface Props {
	children: React.ReactNode
}

export default Layout
