import React from 'react'
import Button from 'react-bootstrap/Button'
import { Icon } from '@iconify/react'

const Banner: React.FC<Props> = ({ bannerImg }) => {
	return (
    <div className="d-flex align-items-end px-4 pb-4 bg-center bg-cover pt-35p bg-gray-1 w-100 rounded-be-10px rounded-bs-10px" style={{ backgroundImage: `url( ${bannerImg} )` }}>
			<div className="text-end w-100">
				<Button variant="light">
					<Icon icon="mdi:camera" className="fs-18px me-2" />
					Edit Cover Photo
				</Button>
			</div>
		</div>
	)
}

interface Props {
	bannerImg: string
}

export default Banner
