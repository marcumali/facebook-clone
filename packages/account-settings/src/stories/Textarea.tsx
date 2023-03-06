import React from 'react'
import Form from 'react-bootstrap/Form'

const Input: React.FC<Props> = ({ label, value, alert }) => {
	return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <textarea className="form-control">{value}</textarea>
      <Form.Text className="text-danger" >{alert}</Form.Text>
    </Form.Group>
	)
}

interface Props {
	label: string
  value?: string
  placeholder?: string
  alert?: string
}

export default Input
