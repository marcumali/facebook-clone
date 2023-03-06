import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Icon } from '@iconify/react'
import Select from 'react-select'
import Modal from './Modal'
import Avatar from './Avatar'
import Button from 'react-bootstrap/Button'

const Publisher = ({ }) => {
	
	const [show, setShow] = useState(false);
	const [disablebuttonifempty, Setdisablebuttonifempty] = useState('')

	const DropdownIndicator = () => {
    return <Icon icon="lucide:chevron-down" className="me-2 text-gray-5 fs-20px" />;
  };

	const privacy = [
    { value: 0, label: 'Public' },
    { value: 1, label: 'Friends' },
    { value: 2, label: 'Private' },
  ]

	return (
		<div>
			<Modal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        title="Create Post"
      >
        <div className="d-flex cursor-pointer mb-3 align-items-center">
					<Avatar className="me-2" src={"https://i.pravatar.cc/41/41"} height={45} width={45} />
					<div>
						<div className="fw-700">Jason Daro</div>
						<Select options={privacy} className="select select-disable-icon select-sm" classNamePrefix="select" defaultValue={{ label: "Public", value: 0 }} />
					</div>
				</div>
				<Form.Control placeholder="What's on your mind?" as="textarea" rows={3} className="w-100 mb-3" value={disablebuttonifempty} onChange={(e: any) => Setdisablebuttonifempty(e.target.value)} />
				<div className="bg-gray-1 rounded-8px d-flex justify-content-center align-items-center w-100 py-10 cursor-pointer">
					<Icon icon="lucide:image-plus" className="fs-24px me-2" />
					<div className="fw-600">Add Photos/Video</div> 
				</div>
				<Button onClick={ () => setShow(false) } className="mt-3 w-100" disabled={!disablebuttonifempty}>Post</Button>
      </Modal>
			<div className="box-shadow-1 bg-white rounded-10px p-3 mb-4">
				<div className="d-flex">
					<Avatar className="me-2" src={"https://i.pravatar.cc/41/41"} height={40} width={40} />
					<div className="form-control cursor-pointer d-flex align-items-center" onClick={ ()=> setShow(true) }>What's on your mind?</div>
				</div>
				<div className="d-flex justify-content-evenly cursor-pointer border-top-1-solid-gray-4 pt-3 mt-3">
					<a href="/go-live">
						<div className="d-flex align-items-center cursor-pointer">
							<Icon icon="lucide:video" className="fs-22px me-2 text-primary" />
							<div>Live Video</div>
						</div>
					</a>
					<div className="d-flex align-items-center cursor-pointer" onClick={ ()=> setShow(true) }>
						<Icon icon="lucide:image" className="fs-18px me-2 text-primary" />
						<div>Photo/Video</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Publisher
