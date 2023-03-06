import React from 'react'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import { Icon } from '@iconify/react'

const FriendNotification = ({}) => {

	const MenuItems = [
    {
      id: '1',
      label: 'General Settings',
      icon: 'mdi:cog',
      link: '/account-settings',
    },
    {
      id: '2',
      label: 'Admin Area',
      icon: 'ic:baseline-space-dashboard',
      link: '#',
    },
    {
      id: '3',
      label: 'Logout',
      icon: 'mdi:logout',
      link: '#',
    },
  ];

	return (
		<Dropdown className="dropdown-seamless">
      <Dropdown.Toggle>
        <div className="d-flex align-items-center text-white cursor-pointer mx-lg-1">
          <div className="w-35px h-35px w-md-40px h-md-40px rounded-circle bg-white ms-2 bg-center bg-cover" style={{ backgroundImage: 'url( https://i.pravatar.cc )' }}></div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-3 w-300px">
        <div className="box-shadow-1 p-3 rounded-8px mb-3">
          <Dropdown.Item href="my-profile" className="p-0 d-flex align-items-center">
            <div className="me-2">
              <div className="w-32px h-32px rounded-circle bg-gray-1 bg-center bg-cover" style={{ backgroundImage: 'url(https://i.pravatar.cc)' }}></div>
            </div>
            <div className="fw-700 fs-16px">Marc Umali</div>
          </Dropdown.Item>
        </div>
          {MenuItems.map(item => (
            <Dropdown.Item href={item.link} className="px-0 d-flex align-items-center mb-2">
              <div className="me-2">
                <div className="w-38px h-38px rounded-circle bg-gray-1 d-flex align-items-center justify-content-center">
                  <Icon icon={item.icon} className="fs-16px fs-md-20px" />
                </div>
              </div>
              <div>{item.label}</div>
            </Dropdown.Item>
					))}
      </Dropdown.Menu>
    </Dropdown>
	)
}

export default FriendNotification
