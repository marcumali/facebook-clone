import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Input from './Input'
import Check from './Check';
import Select from 'react-select'
import { Icon } from '@iconify/react'
import Textarea from './Textarea'

const Profile = ({ }) => {

  const DropdownIndicator = () => {
    return <Icon icon="lucide:chevron-down" className="me-2 text-gray-5 fs-20px" />;
  };

	return (
    <>
      <div className="p-3 border-bottom-1-solid-gray-4">
        <div className="mx-n3">
          <Row>
            <Col lg={12}>
              <div className="fw-700 fs-18px mb-3">Profile</div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Input type="text" label="First Name" value="Marc Umali" placeholder="First Name" alert="This field is required" />
            </Col>
            <Col lg={6}>
              <Input type="text" label="Last Name" value="Marc Umali" placeholder="Last Name" alert="This field is required" />
            </Col>
            <Col lg={12}>
              <Textarea label="About Me"/>
            </Col>
            <Col lg={6}>
              <Input type="text" label="School" value="Harvard University" placeholder="School" />
            </Col>
            <Col lg={6}>
              <Check label="Completed?" name="name" className="mt-5" />
            </Col>
            <Col lg={6}>
              <Input type="text" label="Working at" placeholder="Working at" />
            </Col>
            <Col lg={6}>
              <Input type="text" label="Company Website" placeholder="Company Website" message="(e.g http://www.example.com)"/>
            </Col>
            <Col lg={6}>
              <Input type="text" label="Your Website" placeholder="Your Website Website" />
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Relationship</Form.Label>
                <Select options={[]} components={{ DropdownIndicator }} className="select" classNamePrefix="select" />
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

export default Profile
