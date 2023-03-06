import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Link from 'next/link'

const Friends = ({}) => {

	const PhotosList = [
    {
      id: '1',
      photo: 'https://picsum.photos/100/100',
    },
    {
      id: '2',
      photo: 'https://picsum.photos/101/101',
    },
    {
      id: '3',
      photo: 'https://picsum.photos/102/102',
    },
    {
      id: '4',
      photo: 'https://picsum.photos/103/103',
    },
    {
      id: '5',
      photo: 'https://picsum.photos/104/104',
    },
    {
      id: '6',
      photo: 'https://picsum.photos/105/105',
    },
  ];

	return (
		<div className="box-shadow-1 p-3 bg-white rounded-8px mb-3">
			<div className="mx-n3">
				<Row>
					<Col lg={12}>
						<div className="d-flex align-items-center justify-content-between mb-2">
							<div className="fs-16px fw-700">Photos</div>
							<Link href="#">
								<div className="text-primary cursor-pointer">See all</div>
							</Link>
						</div>
					</Col>
				</Row>
				<Row className="mx-0">
					{PhotosList.map(item => (
						<Col lg={4} className="mb-2 px-1" key={item.id}>
              <div className="pt-100p bg-center bg-cover bg-gray-1 rounded-6px cursor-pointer" style={{ backgroundImage: `url(${item.photo})` }}></div>
            </Col>
					))}
				</Row>
			</div>
		</div>
	)
}

export default Friends
