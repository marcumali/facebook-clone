import React from 'react'
import Form from 'react-bootstrap/Form'

const Check: React.FC<Props> = ({ label, name, className, id }) => {
	return (
    <Form.Group className={ "d-flex align-items-center " + className } controlId="formBasicEmail">
      <Form.Check aria-label="option 1" id={id} name={name} className="me-2" />
      <Form.Label for={id}>{label}</Form.Label>
    </Form.Group>
	)
}

interface Props {
	label: string
  name: string
  className?: string,
	id: string,
}

export default Check
