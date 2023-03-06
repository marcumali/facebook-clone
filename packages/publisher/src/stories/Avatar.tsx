import React from 'react'

const Avatar: React.FC<Props> = ({ className, src, width, height  }) => {
	return (
    <div className={className}>
			<div className="bg-gray-3 rounded-circle bg-center bg-cover" data-width={width} data-height={height} style={{ backgroundImage: `url( ${src} )` }}></div>
		</div>
	)
}

interface Props {
	className: string
	src: string
	width: number
	height: number
}

export default Avatar
