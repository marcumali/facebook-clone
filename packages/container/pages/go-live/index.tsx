import React, {useState} from 'react'
import { NextPage } from 'next'
import { Header, Layout, SidebarMenuItems } from 'newsfeed'
import { Iframe } from 'iframe'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Icon } from '@iconify/react'
import { Avatar } from 'post'
import Select from 'react-select'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const GoLive: NextPage = () => {

  const DropdownIndicator = () => {
    return <Icon icon="lucide:chevron-down" className="me-2 text-gray-5 fs-20px" />;
  };

  const goLiveSched = [
    { value: 0, label: 'Now' },
    { value: 1, label: 'Later' },
  ]

  const goLiveTime = [
    { value: 0, label: '12:00 AM' },
    { value: 1, label: '1:00 AM' },
    { value: 2, label: '2:00 AM' },
    { value: 3, label: '3:00 AM' },
    { value: 4, label: '4:00 AM' },
    { value: 5, label: '5:00 AM' },
    { value: 6, label: '6:00 AM' },
    { value: 7, label: '7:00 AM' },
    { value: 8, label: '8:00 AM' },
    { value: 9, label: '9:00 AM' },
    { value: 10, label: '10:00 AM' },
    { value: 11, label: '11:00 AM' },
    { value: 12, label: '12:00 PM' },
  ]

  const privacy = [
    { value: 0, label: 'Public' },
    { value: 1, label: 'Friends' },
    { value: 2, label: 'Private' },
  ]

  const [showDate, setShowDate] = useState(false);

  return(
    <Layout>
      <Header />
      <div className="h-100 d-lg-flex">
        <div className="bg-gray-1">
          <div className="w-lg-350px p-3 bg-white box-shadow-1 h-100">
            <div className="fw-700 fs-20px mb-3">Create Live Video</div>
            <div className="d-flex align-items-center mb-2">
              <div>
                <Icon icon="material-symbols:check-circle-rounded" className="fs-22px text-success me-2" />
              </div>
              <div className="fw-600">Connect Video Source</div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div>
                <Icon icon="material-symbols:check-circle-rounded" className="fs-22px text-success me-2" />
              </div>
              <div className="fw-600">Complete Post Details</div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div>
                <Icon icon="material-symbols:circle-outline" className="fs-22px text-base me-2" />
              </div>
              <div className="fw-600">Go Live</div>
            </div>
            <div className="bg-gray-6 h-1px my-3"></div>
            <div className="d-flex align-items-center mb-3">
              <Avatar src="https://i.pravatar.cc/45/45" className="me-2" width={45} height={45} />
              <div>
                <div className="fw-500">Jason Daro</div>
                <div>Host - Your Profile</div>
              </div>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>When are you going to live?</Form.Label>
                <Select defaultValue={{ value: 0, label: "Now" }} onChange={ ()=> setShowDate(!showDate) } options={goLiveSched} components={{ DropdownIndicator }} className="select" classNamePrefix="select" />
              </Form.Group>
            </div>
            { 
              showDate && 
              <div className="d-flex justify-content-between mb-3">
                <div className="w-50 me-3">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" placeholder="Select Date" />
                  </Form.Group>
                </div>
                <div className="w-50">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Time</Form.Label>
                    <Select options={goLiveTime} components={{ DropdownIndicator }} className="select" classNamePrefix="select" />
                  </Form.Group>
                </div>
              </div> 
            }
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Privacy</Form.Label>
              <Select options={privacy} components={{ DropdownIndicator }} className="select" classNamePrefix="select" />
            </Form.Group>
            <div className="d-none d-lg-flex mb-3">
              <Button variant="light">Back</Button>
              <Button variant="primary" className="w-100 ms-3">Go Live</Button>
            </div>
          </div>
        </div>
        <Row className="mx-auto w-100 justify-content-center pt-4">
          <Col xl={10} className="px-3 mx-auto">
            <Row>
              <Col lg={6}>
                <div className="bg-white p-3 rounded-10px box-shadow-1 mb-3">
                  <div className="fs-18px fw-700 mb-3">Video Source</div>
                  <Tabs className="tabs-outline-icon">
                    <TabList className="list-unstyled cursor-pointer d-flex">
                      <Tab className="w-50p text-center me-3">
                        <div>
                          <div className="mb-2 d-flex align-items-center justify-content-center w-45px h-45px rounded-circle mx-auto">
                            <Icon icon="material-symbols:photo-camera-rounded" className="fs-26px" />
                          </div>
                          Webcam
                        </div>
                      </Tab>
                      <Tab className="w-50p text-center">
                        <div>
                          <div className="mb-2 d-flex align-items-center justify-content-center w-45px h-45px rounded-circle mx-auto">
                            <Icon icon="material-symbols:key-rounded" className="fs-26px" />
                          </div>
                          Streaming software
                        </div>
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className="mb-3">
                        <div className="fw-700">Camera controls</div>
                        Check that your camera and microphone inputs are properly working before going live.
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div>
                          <Icon icon="material-symbols:photo-camera-rounded" className="fs-24px" />
                        </div>
                        <Select options={[]} components={{ DropdownIndicator }} placeholder="Select a media source" className="select w-100p ms-3" classNamePrefix="select" />
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div>
                          <Icon icon="material-symbols:mic-rounded" className="fs-24px" />
                        </div>
                        <Select options={[]} components={{ DropdownIndicator }} placeholder="Select a media source" className="select w-100p ms-3" classNamePrefix="select" />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="mb-3">
                        <div className="fw-700">Streaming software setup</div>
                        Copy and paste the stream key into your streaming software.
                      </div>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>Stream Key</Form.Label>
                        <div className="d-flex">
                          <Form.Control type="text" value="K-3404546843198547-0-AbyTOFJrlmLtsc3O" disabled />
                          <Button variant="light" className="mx-3">Copy</Button>
                          <Button variant="light">Reset</Button>
                        </div>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Server URL</Form.Label>
                        <div className="d-flex">
                          <Form.Control type="text" value="K-3404546843198547-0-AbyTOFJrlmLtsc3O" disabled />
                          <Button variant="light" className="ms-3">Copy</Button>
                        </div>
                      </Form.Group>
                    </TabPanel>
                  </Tabs>
                </div>
                </Col>
              <Col lg={6}>
                <div className="bg-white p-3 rounded-10px box-shadow-1 mb-3">
                  <div className="fs-18px fw-700 mb-3">Add post details</div>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as="textarea" />
                  </Form.Group>
                  <div className="d-flex d-lg-none mt-3">
                    <Button variant="light">Back</Button>
                    <Button variant="primary" className="w-100 ms-3">Go Live</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Layout>
  )
};

export default GoLive;