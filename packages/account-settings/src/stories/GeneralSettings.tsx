import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Input from './Input';
import Check from './Check';
import Select from 'react-select'
import { Icon } from '@iconify/react'

const GeneralSettings = ({ }) => {

  const DropdownIndicator = () => {
    return <Icon icon="lucide:chevron-down" className="me-2 text-gray-5 fs-20px" />;
  };

	return (
    <>
      <div className="p-3 border-bottom-1-solid-gray-4">
        <div className="fw-700 fs-18px mb-3">General Settings</div>
        <div className="d-flex align-items-center mb-3">
          <div className="me-4">
            <div className="bg-gray-1 w-75px h-75px rounded-circle bg-center bg-cover position-relative" style={{ backgroundImage: "url( https://i.pravatar.cc )" }}>
              <div className="w-35px h-35px rounded-circle d-flex align-items-center justify-content-center bg-gray-1 cursor-pointer position-absolute end-0 bottom-0">
                <Icon icon="mdi:camera" className="fs-20px" />
              </div>
            </div>
          </div>
          <div className="lh-sm">
            <div className="fs-18px fw-700">Marc Umali</div>
            <div className="text-gray-4">@marcumali</div>
          </div>
        </div>
        <div className="mx-n3">
          <Row> 
            <Col lg={6}>
              <Input label="Username" type="text" value="marcumali" placeholder="Username" alert="This field is requried." />
            </Col>
            <Col lg={6}>
              <Input label="Email" type="email" value="marcumali" placeholder="Email" alert="This field is requried." />
            </Col>
            <Col lg={6}>
              <Input label="Phone" type="number" value="+63 987 6543 210" placeholder="Phone" />
            </Col>
            <Col lg={6}>
              <Check label="Enable/Disable Phone Number" name="name" className="mt-5" />
            </Col>
            <Col lg={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="text" placeholder="Pick Date" />
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Select options={[]} components={{ DropdownIndicator }} className="select" classNamePrefix="select" />
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Select options={[]} components={{ DropdownIndicator }} className="select" classNamePrefix="select" />
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
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

export default GeneralSettings
