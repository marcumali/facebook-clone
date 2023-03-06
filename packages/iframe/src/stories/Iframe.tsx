import React from 'react'

const Iframe: React.FC<Props> = ({ className, src  }) => {
	return (
    <div className={"h-100 w-100 mt-4 " + className}>
			<iframe src={src} className="w-100 h-100"></iframe>
		</div>
	)
}

interface Props {
	className?: string
	src: string
}

export default Iframe
