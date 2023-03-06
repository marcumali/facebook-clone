import React from 'react'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import { Icon } from '@iconify/react'

const MessageNotification = ({}) => {

	const MessageList = [
    {
      id: '1',
      name: 'Jason Daro',
      avatar: 'https://i.pravatar.cc/32/32',
      message: 'This is some text',
      time: '1 min'
    },
    {
      id: '2',
      name: 'Darwin Pineda',
      avatar: 'https://i.pravatar.cc/33/33',
      message: 'This is some text',
      time: '30 mins'
    },
    {
      id: '3',
      name: 'Kevin Rey Tabada',
      avatar: 'https://i.pravatar.cc/34/34',
      message: 'This is some text This is some text',
      time: '2 hrs'
    },
    {
      id: '4',
      name: 'Devin Stewart',
      avatar: 'https://i.pravatar.cc/35/35',
      message: 'This is some text',
      time: '1 day'
    },
  ];

	return (
		<Dropdown className="dropdown-seamless">
      <Dropdown.Toggle>
        <div className="d-flex align-items-center text-white cursor-pointer mx-1 position-relative d-flex w-35px h-35px w-md-40px h-md-40px bg-primary-6 rounded-circle justify-content-center">
          <div className="rounded-circle bg-danger w-10px h-10px position-absolute top-0 right-0 me-2"></div>
          <Icon icon="mdi-message" className="fs-18px fs-md-22px" />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-3 w-300px">
        <div className="box-shadow-1 p-3 rounded-8px">
          <Dropdown.Item href="#" className="p-0 d-flex align-items-center justify-content-between">
            <div className="fw-700">Messages</div>
            <Link href="/messenger">
              <div className="text-primary">View More</div>
            </Link>
          </Dropdown.Item>
        </div>
          {MessageList.map((item: any, index: number) => (
            <div key={index}>
              <Dropdown.Item href="#" className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center py-2">
                  <div className="w-32px me-2">
                    <div className="w-32px h-32px rounded-circle bg-gray-1 bg-center bg-cover" style={{ backgroundImage: 'url( https://i.pravatar.cc )' }}></div>
                  </div>
                  <div className="w-100">
                    <div className="fw-700 me-2">{item.name}</div>
                    <div className="clamp clamp-1 fs-12px text-gray-4">{item.message}</div>
                    <div className="fs-12px text-primary">{item.time} ago</div>
                  </div>
                </div>
                <div className="w-18px ms-2">
                  <Icon icon="material-symbols:arrow-right-alt" className="fs-18px cursor-pointer"/>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider className="m-0" />
            </div>
					))}
      </Dropdown.Menu>
    </Dropdown>
	)
}

export default MessageNotification
