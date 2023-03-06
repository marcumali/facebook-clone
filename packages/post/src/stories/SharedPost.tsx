import React from 'react'
import Image from './Image'
import Avatar from './Avatar'
import Text from './Text'

const SharedPost:React.FC<Props> = ({  }) => {
	return (
    <div className="p-3 rounded-8px border-1-solid-gray-1 bg-gray-1">
			<Image src="https://picsum.photos/1000/600" />
			<div className="d-flex align-items-center cursor-pointer mt-2">
				<Avatar className="me-2" src="https://i.pravatar.cc/30/30" height={30} width={30} />
				<div className="fw-600">Jason Daro</div>
			</div>
			<Text className="text-gray-4 mt-1" value="The way to get started is to quit talking and begin doing." />
	</div>
	)
}

interface Props {
	
}

export default SharedPost
