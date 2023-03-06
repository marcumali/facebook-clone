import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Icon } from '@iconify/react'

const DeleteAccount = ({ }) => {

const [passwordShown, setPasswordShown] = useState(false);

const togglePassword = () => {
  setPasswordShown(!passwordShown);
};

	return (
    <>
      <div className="p-3 border-bottom-1-solid-gray-4">
        <div className="mx-n3">
          <Row>
            <Col lg={12}>
              <div className="fw-700 fs-18px mb-3">Delete Account</div>
            </Col>
            <Col lg={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Current Password</Form.Label>
                <div className="position-relative">
                  <Form.Control type={passwordShown ? "text" : "password"} placeholder="Current Password"></Form.Control>
                  <Icon className="cursor-pointer position-absolute top-0 bottom-0 my-auto fs-16px end-0 me-3" icon={passwordShown ? "lucide:eye" : "lucide:eye-off"} onClick={togglePassword}/>
                </div>
                <Form.Text className="text-danger">Incorrect Password</Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </div>
      </div>
      <div className="p-3">
        <Button>Save</Button>
      </div>
    </>
	)
}

export default DeleteAccount
