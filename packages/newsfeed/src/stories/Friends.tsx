import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { Icon } from '@iconify/react'
import Dropdown from 'react-bootstrap/Dropdown'

const Friends = ({}) => {

	const UserList = [
    {
      id: '1',
      name: 'Jason Daro',
      avatar: 'https://i.pravatar.cc/100/100',
      link: '#',
      mutalFriends: 23,
      job: "Full Stack Developer",
      company: "LifestreamNetworks",
    },
    {
      id: '2',
      name: 'Devin Stewart',
      avatar: 'https://i.pravatar.cc/101/101',
      link: '#',
      mutalFriends: 213,
      job: "QA Manager",
      company: "Adidas",
    },
    {
      id: '3',
      name: 'Kevin Rey Tabada',
      avatar: 'https://i.pravatar.cc/102/102',
      link: '#',
      mutalFriends: 223,
      job: "Web Developer",
      company: "Omni Media Cast",
    },
    {
      id: '4',
      name: 'Archere Dimaculangan',
      avatar: 'https://i.pravatar.cc/103/103',
      link: '#',
      mutalFriends: 234,
      job: "Product Manager",
      company: "Apple",
    },
    {
      id: '5',
      name: 'Darwin Pineda',
      avatar: 'https://i.pravatar.cc/104/104',
      link: '#',
      mutalFriends: 567,
      job: "Quality Assurance",
      company: "Microsoft",
    },
    {
      id: '6',
      name: 'Kallah Vista',
      avatar: 'https://i.pravatar.cc/105/105',
      link: '#',
      mutalFriends: 342,
      job: "Frontend Developer",
      company: "Windows",
    },
  ];

	return (
		<div className="box-shadow-1 p-3 bg-white rounded-8px mb-3">
			<div className="mx-n3">
				<Row>
					<Col lg={12}>
						<div className="d-flex align-items-center justify-content-between mb-2">
							<div className="fs-16px fw-700">Friends</div>
							<Link href="#">
								<div className="text-primary cursor-pointer">See all</div>
							</Link>
						</div>
					</Col>
				</Row>
				<Row className="mx-0">
					{UserList.map(item => (
						<Col md={6} lg={4} className="mb-2 px-1" key={item.id}>
							<Link href={item.link}>
								<div className="popupover text-base">
									<div className="bg-center bg-cover w-100 pt-100p bg-gray-1 rounded-6px" style={{ backgroundImage: `url(${item.avatar})` }}></div>
									<div className="clamp clamp-2 fs-13px">{item.name}</div>
									<div className="popover-content" data-inner-spacer={20} data-position-start="n300" data-position-top={0} data-width={300} style={{ display: "none" }}>
                    <div className="d-flex mb-3">
                      <div>
                        <div className="w-60px h-60px rounded-circle bg-gray-1 bg-center bg-cover cursor-pointer" style={{ backgroundImage: "url( https://i.pravatar.cc )" }}></div>
                      </div>
                      <div className="ms-3">
                        <div className="fw-700 fs-16px cursor-pointer">{item.name}</div>
                        <div className="d-flex mb-1">
                          <div>
                            <Icon icon="mdi:users" className="fs-16px me-1" />
                          </div>
                          <div>{item.mutalFriends} mutual friends</div>
                        </div>
                        <div className="d-flex mb-1">
                          <div>
                            <Icon icon="mdi:briefcase" className="fs-16px me-1" />
                          </div>
                          <div>{item.job} at <b>{item.company}</b></div>
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
								</div>
							</Link>
						</Col>
					))}
				</Row>
			</div>
		</div>
	)
}

export default Friends
