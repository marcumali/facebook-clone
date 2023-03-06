import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Icon } from '@iconify/react'

const DropdownButton: React.FC<Props> = ({ onClick, title }: Props) => {

	return (
    <>
			<Dropdown className="dropdown-seamless">
        <Dropdown.Toggle>
          <div className="ms-2 w-30px h-30px text-base rounded-circle bg-gray-6 d-flex align-items-center justify-content-center">
            <Icon icon="mdi:ellipsis-horizontal" className="fs-20px" />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3 w-200px">
          <Dropdown.Item className="px-0 d-flex align-items-center mb-2" onClick={onClick}>
            <Icon icon="lucide:edit" className="fs-20px me-2" />
            <div>Edit {title}</div>
          </Dropdown.Item>
          <Dropdown.Item href="#" className="px-0 d-flex align-items-center mb-2">
            <Icon icon="lucide:trash-2" className="fs-20px me-2" />
            <div>Delete {title}</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
	)
}

interface Props{
	title?: string
  onClick?: () => void
  dataArray: []
}

DropdownButton.defaultProps = {
	title: '',
}

export default DropdownButton
