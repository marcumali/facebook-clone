import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Icon } from '@iconify/react'

const Bio: React.FC<Props> = ({ className }) => {

	const [editBio, setEditBio] = useState(false)

	const bioData = [
		{
			id: 0,
			label: 'Frontend Developer - UI/UX Designer at Prospark',
			icon: 'mdi:briefcase',
		},
		{
			id: 1,
			label: 'Binangonan',
			icon: 'mdi:home',
		},
		{
			id: 2,
			label: 'Datamex',
			icon: 'mdi:graduation-cap',
		},
		{
			id: 3,
			label: 'marcumaligithub.io',
			icon: 'mdi:globe',
		},
	];

	return (
    <div className={className}>
			<div className="mb-3"> 
				{ editBio ? 
					<>
						<Form.Control type="text" as="textarea" placeholder="Add something about your self" value="Frontend Developer - UI/UX Designer" className="mb-2" />
						<div className="d-flex justify-content-end">
							<Button variant="light" onClick={ () => setEditBio(false) } className="me-2">Cancel</Button>
							<Button variant="primary" onClick={ () => setEditBio(false) }>Save</Button>
						</div>
					</> 
					:
						<>
							<div className="text-center mb-2">Frontend Developer - UI/UX Designer</div> 
							<Button variant="light" className="w-100" onClick={ () => setEditBio(true) }>Edit Bio</Button>
						</> 
				}
			</div>
			<div className="mb-3">
				{ bioData.map( item =>(
					<div className="d-flex align-items-center mb-2" key={item.id}>
						<div className="me-2">
							<Icon icon={item.icon} className="fs-22px text-gray-4" />
						</div>
						<div>{item.label}</div>
					</div>
				))}
				<a href="/account-settings">
					<Button variant="light" className="w-100">Edit Details</Button>
				</a>
			</div>
		</div>
	)
}

interface Props {
	className?: string
}

export default Bio
