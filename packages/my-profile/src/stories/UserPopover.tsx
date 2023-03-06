import React from 'react'
import Button from 'react-bootstrap/Button'
import { Icon } from '@iconify/react'
import Dropdown from 'react-bootstrap/Dropdown'

const UserPopover: React.FC<Props> = ({ bannerImg }) => {
	return (
    <div className="popover-content" data-inner-spacer={20} data-position-start={0} data-position-top={35} data-width={300} style={{ display: "none" }}>
			<div className="d-flex mb-3">
				<div>
					<div className="w-60px h-60px rounded-circle bg-gray-1 bg-center bg-cover cursor-pointer" style={{ backgroundImage: "url( https://i.pravatar.cc )" }}></div>
				</div>
				<div className="ms-3">
					<div className="fw-700 fs-16px cursor-pointer">Jason Daro</div>
					<div className="d-flex mb-1">
						<div>
							<Icon icon="mdi:users" className="fs-16px me-1" />
						</div>
						<div>100 mutual friends</div>
					</div>
					<div className="d-flex mb-1">
						<div>
							<Icon icon="mdi:briefcase" className="fs-16px me-1" />
						</div>
						<div>Fullstack Developer at <b>Lifestream Networks</b></div>
					</div>
				</div>
			</div>
			<div className="d-flex">
				<Dropdown className="dropdown-bs-btn w-50 me-2">
					<Dropdown.Toggle className="btn btn-light">
						<Icon icon="bxs:user-check" className="fs-20px me-2" />
						<div className="">Friends</div>
					</Dropdown.Toggle>
					<Dropdown.Menu className="p-3 w-200px">
						<div className="px-0 d-flex align-items-center mb-2">
							<Icon icon="gis:layer-alt-x-o" className="fs-20px me-2" />
							<div>Unfollow</div>
						</div>
						<div className="px-0 d-flex align-items-center mb-2">
							<Icon icon="lucide:user-x" className="fs-20px me-2" />
							<div>Unfriend</div>
						</div>
						<div className="px-0 d-flex align-items-center mb-2">
							<Icon icon="mdi:ban" className="fs-20px me-2" />
							<div>Block</div>
						</div>
						<div className="px-0 d-flex align-items-center">
							<Icon icon="mdi:warning-circle-outline" className="fs-20px me-2" />
							<div>Report</div>
						</div>
					</Dropdown.Menu>
				</Dropdown>
				<Button className="w-50">
					<Icon icon="mdi:message" className="fs-18px me-2" />
					<div className="">Message</div>
				</Button>
			</div>
		</div>
	)
}

interface Props {
	bannerImg: string
}

export default UserPopover
