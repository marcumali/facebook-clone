import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react'

const PostModal: React.FC<Props> = ({ show, handleClose, size, title, children }) => {

	return (
    <div>
			<Modal onClose={handleClose} size={size} show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<div className="fw-700">{title}</div>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
			</Modal>
		</div>
	)
}

interface Props{
	show: boolean
	handleClose: () => void
	handleShow: () => void
	size?: "sm" | "lg" | "xl"
	title: string
	children: React.ReactNode 
}

export default PostModal
