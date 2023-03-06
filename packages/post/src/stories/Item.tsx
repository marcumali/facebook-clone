import React from 'react'

const Item = ({children}: Props) => {
	return (
		<div className="box-shadow-1 p-3 rounded-8px bg-white mb-4">
			{children}
		</div>
	)
}

interface Props {
	children: React.ReactNode
}

export default Item
