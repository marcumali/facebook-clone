import React from 'react'
import Form from 'react-bootstrap/Form'

const Input: React.FC<Props> = ({ label, value, placeholder, alert, message }) => {
	return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control value={value} placeholder={placeholder}/>
      { alert && <Form.Text className="text-danger" >{alert}</Form.Text> }
      { message && <Form.Text className="text-gray-2" >{message}</Form.Text> }
    </Form.Group>
	)
}

interface Props {
	label?: string
  type: string
  value?: string
  placeholder?: string
  alert?: string
  message?: string
}

export default Input
