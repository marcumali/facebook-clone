import React from 'react'
import { Icon } from '@iconify/react'

const Reactions = ({ }) => {
	return (
    <div className="d-flex cursor-pointer">
			<div className="mx-2">
				<Icon icon="ant-design:like-filled" className="fs-24px text-primary" />
			</div>
			<div className="mx-2">
				<Icon icon="mdi:cards-heart" className="fs-24px text-danger" />
			</div>
			<div className="mx-2">
				<Icon icon="clarity:happy-face-solid" className="fs-24px text-warning" />
			</div>
			<div className="mx-2">
				<Icon icon="bxs:shocked" className="fs-26px text-warning" />
			</div>
			<div className="mx-2">
				<Icon icon="ri:emotion-sad-fill" className="fs-26px text-warning" />
			</div>
			<div className="mx-2">
				<Icon icon="fluent:emoji-angry-20-filled" className="fs-26px text-danger" />
			</div>
		</div>
	)
}

export default Reactions
