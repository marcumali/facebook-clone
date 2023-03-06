import React from 'react'

const Avatar: React.FC<Props> = ({ className, src, width, height, status  }) => {
	return (
    <div className={className}>
			<div className="bg-gray-3 rounded-circle bg-center bg-cover d-flex justify-content-end" data-width={width} data-height={height} style={{ backgroundImage: `url( ${src} )` }}>
				<div className={ "w-12px h-12px rounded-circle border-2-solid-white " + status}></div>
			</div>
		</div>
	)
}

interface Props {
	className?: string
	src: string
	width: number
	height: number
	status: string
}

export default Avatar