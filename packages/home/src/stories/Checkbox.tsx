import React from 'react'
import Form from 'react-bootstrap/Form'

const Checkbox: React.VFC = ({name, children}: Props) => {
	return (
		<Form.Group>
			<Form.Check name={name} type="checkbox" label={children} />
		</Form.Group>
	)
}

interface Props {
	name: string
	children: React.ReactNode
}

export default Checkbox
