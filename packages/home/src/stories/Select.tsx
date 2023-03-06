import React from 'react'
import Form from 'react-bootstrap/Form'

const Select: React.VFC = ({options}: Props) => {
	return (
		<Form.Select className="form-control-lg mb-2">
			{options?.map((item: any, index: number) => (
				<option key={index} value={item.value}>{item.label}</option>
			))}
		</Form.Select>
	)
}

interface Props {
	options: Array<{value: any, label: any}>
}

export default Select
