import React from 'react'
import Form from 'react-bootstrap/Form'
import { Icon } from '@iconify/react'

const Input: React.VFC = ({name, type, icon, placeholder, children, ...props}: Props) => {
	return (
		<Form.Group className="mb-2">
			<div className="position-relative">
				<Icon icon={icon} className="position-absolute left-0 top-0 bottom-0 my-auto ms-2 fs-20px" />
				<Form.Control name={name} type={type} placeholder={placeholder} className="ps-6 form-control-lg" {...props} />
			</div>
			{children}
		</Form.Group>
	)
}

interface Props {
	name: string
	type: string
	icon: string
	placeholder: string
	children: React.ReactNode
}

Input.defaultProps = {
	type: 'text',
	icon: 'lucide:user',
	placeholder: 'Placeholder',
}

export default Input
