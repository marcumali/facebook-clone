import React from 'react'
import Form from 'react-bootstrap/Form'

const Check: React.FC<Props> = ({ label, name, className }) => {
	return (
    <Form.Group className={ "d-flex align-items-center " + className } controlId="formBasicEmail">
      <Form.Check aria-label="option 1" name={name} className="me-2" />
      <Form.Label label={label}>{label}</Form.Label>
    </Form.Group>
	)
}

interface Props {
	label: string
  name: string
  className?: string
}

export default Check
