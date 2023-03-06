import React from 'react'
import Image from 'react-bootstrap/Image'

const Logo: React.VFC = ({src, ...props}: Props) => {
	return (
		<Image src="/images/logo.png" {...props} />
	)
}

interface Props {
	src: string
}

Logo.defaultProps = {
	src: '/images/logo.png'
}

export default Logo
