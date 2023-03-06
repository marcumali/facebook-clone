import React from 'react'
import { Icon } from '@iconify/react'

const Engagement = ({ }) => {
	return (
    <div className="d-flex align-items-center justify-content-between text-gray-3 my-2">
			<div className="d-flex">
				<div className="d-flex">
					<Icon icon="clarity:happy-face-solid" className="fs-20px text-warning" />
					<Icon icon="ant-design:like-filled" className="fs-20px text-primary" />
				</div>
				<div className="text-gray-3 ms-2 text">123</div>
			</div>
			<div className="d-flex align-items-center">
				<div className="me-2">532 Comments</div>
				<div>214 Share</div>
			</div>
		</div>
	)
}

export default Engagement
