import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Icon } from '@iconify/react'
import Form from 'react-bootstrap/Form';
import Avatar  from './Avatar'
import TextareaAutosize from 'react-textarea-autosize';

const Conversation: React.FC<Props> = ({ userName, currentMessage, userStatus }) => {
	return (
    <div className="d-flex flex-column h-100">
			<div className="d-flex align-items-center justify-content-between p-3 border-bottom-1-solid-gray-6">
				<div className="d-flex align-items-center">
					<Avatar width={55} height={55} src="https://i.pravatar.cc/55/55" status={userStatus} className="me-2" />
					<div>
						<div className="fw-500">{userName}</div>
						<div className="fs-12px">
							{ userStatus === 'bg-success-2' ? "Online" : "Offline" }
						</div>
					</div>
				</div>
				<Dropdown className="dropdown-seamless">
					<Dropdown.Toggle>
						<Icon icon="lucide:more-vertical" className="fs-20px cursor-pointer text-base" />
					</Dropdown.Toggle>
					<Dropdown.Menu align="end" className="w-200px">
						<Dropdown.Item href="#" className="d-flex align-items-center">
							<div className="me-2">
								<Icon icon="lucide:user" className="fs-20px" />
							</div>
							<div>View Profile</div>
						</Dropdown.Item>
						<Dropdown.Item href="#" className="d-flex align-items-center">
							<div className="me-2">
								<Icon icon="lucide:alert-circle" className="fs-20px" />
							</div>
							<div>Block</div>
						</Dropdown.Item>
						<Dropdown.Item href="#" className="d-flex align-items-center">
							<div className="me-2">
								<Icon icon="lucide:trash-2" className="fs-20px" />
							</div>
							<div>Delete Conversation</div>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<div className="h-100 d-flex flex-column p-3">
				<div className="position-relative h-100">
					<div className="overflow-y-auto position-absolute h-100 top-0 start-0 w-100">
						<div className="d-flex">
							<div className="w-80p">
								<div className="d-flex align-items-center mb-3">
									<div className="bg-gray-1 px-2 py-1 me-2 rounded-10px">
										{currentMessage}
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<div className="w-80p">
								<div className="d-flex align-items-center justify-content-end mb-3">
									<div className="text-white bg-primary px-2 py-1 me-2 rounded-10px">
										Yow! It’s exciting! It’s much busier than the last city we lived in. I was working in Seattle for the last 3 years.
									</div>
									<div><Icon icon="material-symbols:check-circle-rounded" className="fs-14px text-primary"/></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="fs-12px mb-1 text-gray-4">{userName} is typing ...</div>
					<div className="d-flex align-items-end">
						<TextareaAutosize maxRows={3} minRows={1} className="form-control w-100 me-2" placeholder="Write something here ..." />
						<Icon icon="ant-design:like-filled" className="cursor-pointer fs-24px cursor-pointer text-primary mb-2" />
					</div>
				</div>
			</div>
		</div>
	)
}

interface Props {
	userName: string
	currentMessage?: string
	userStatus: string
}

export default Conversation
