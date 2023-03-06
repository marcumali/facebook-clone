import React from 'react'
import { Icon } from '@iconify/react'

const SocialLinks: React.VFC = ({label}: Props) => {
	return (
    <div>
      <div className="text-center fs-14px text-gray-3 mb-2">{label}</div>
      <div className="d-flex justify-content-center">
				<div className="rounded-circle w-39px h-39px bg-primary-3 text-white d-flex justify-content-center align-items-center cursor-pointer me-2">
					<Icon icon="gg:facebook" className="fs-22px" />
				</div>
				<div className="rounded-circle w-39px h-39px bg-primary-4 text-white d-flex justify-content-center align-items-center cursor-pointer me-2">
					<Icon icon="ri:twitter-fill" className="fs-22px" />
				</div>
				<div className="rounded-circle w-39px h-39px bg-danger-2 text-white d-flex justify-content-center align-items-center cursor-pointer me-2">
					<Icon icon="mdi:instagram" className="fs-22px" />
				</div>
      </div>
    </div>
	)
}

interface Props {
	label: string
}

export default SocialLinks
