import React from 'react'
import ImageProps from 'react-bootstrap/Image'

const Image:React.FC<Props> = ({ src, onClick, className }) => {
	return (
		<div className="bg-black rounded-4px" onClick={onClick}>
			<ImageProps src={src} className={ "rounded-4px cursor-pointer mx-auto d-block " + className } fluid/>
		</div>
	)
}

interface Props {
	src: any,
	className?: string,
	onClick?: () => void
}

export default Image
