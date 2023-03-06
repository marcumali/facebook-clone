import React from 'react'

const Avatar: React.FC<Props> = ({ className, src, width, height, widthLg, heightLg, imgClassName }) => {
	return (
    <div className={className}>
			<div 
				className={ "bg-gray-3 rounded-circle bg-center bg-cover " + imgClassName }
				data-width={width} 
				data-height={height} 
				data-lg-width={widthLg} 
				data-lg-height={heightLg} 
				style={{ backgroundImage: `url( ${src} )` }}>
			</div>
		</div>
	)
}

interface Props {
	className?: string
	src: string
	width: number
	height: number
	widthLg?: number
	heightLg?: number
	imgClassName?: string
}

export default Avatar
