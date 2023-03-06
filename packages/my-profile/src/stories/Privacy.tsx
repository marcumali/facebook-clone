import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react'

const Privacy: React.FC<Props> = ({ label }: Props) => {

	const [show, setShow] = useState(false);
	const [privacy, setPrivacy] = useState( "Public")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	const RadioButton = (props:any) => {
    const { changed, id, isSelected, label, value, labelClassName, className, icon } = props;
    return (
      <div className={ className }>
        <label className={ "d-flex align-items-center cursor-pointer " + labelClassName} htmlFor={id}>
          <div className="d-flex">
            <div><Icon icon={icon} className="fs-20px me-2" /></div>
            <div>{label}</div>
          </div>
          <input id={id} onChange={changed} value={value} type="radio" checked={isSelected} />
        </label>
      </div>
    );
  }

	const radioChangeHandler = (e:any) => {
    setPrivacy(e.target.value);
  }

	return (
    <>
			{ label ? 
				<Button variant="light" onClick={handleShow}>
					{ privacy === "Public" ? 
						<div className="d-flex align-items-center">
							<Icon icon="mdi:globe" className="me-2" /> Public
						</div> : privacy === "Friends" ? 
						<div className="d-flex align-items-center">
							<Icon icon="ph:users-three-fill" className="me-2" /> Friends
						</div> : privacy === "Private" ? 
						<div className="d-flex align-items-center">
							<Icon icon="uis:padlock" className="me-2" /> Only Me
						</div> : '' 
					}
				</Button> : 
				<Icon onClick={handleShow} icon={ privacy === "Public" ? 'mdi:globe' : privacy === "Friends" ? 'ph:users-three-fill' : privacy === "Private" ? 'uis:padlock' : '' } className="fs-20px cursor-pointer" /> }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
					<div className="fw-700">Select audience</div>
        </Modal.Header>
        <Modal.Body>
					<RadioButton changed={radioChangeHandler} icon="mdi:globe" id="public" isSelected={privacy === "Public"} label="Public" value="Public" labelClassName="mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" />
					<RadioButton changed={radioChangeHandler} icon="ph:users-three-fill" id="friends" isSelected={privacy === "Friends"} label="Friends" value="Friends" labelClassName="mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" />
					<RadioButton changed={radioChangeHandler} icon="uis:padlock" id="private" isSelected={privacy === "Private"} label="Only Me" value="Private" labelClassName="mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" />
				</Modal.Body>
        <div className="d-flex px-3 pb-3 justify-content-end">
          <Button variant="light" onClick={handleClose} className="me-3">Cancel</Button>
          <Button variant="primary" onClick={handleClose}>Done</Button>
        </div>
      </Modal>
    </>
	)
}

interface Props{
	label: boolean
}

Privacy.defaultProps = {
	
}

export default Privacy
