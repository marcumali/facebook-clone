import React, {useState} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Header, Layout } from 'newsfeed'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import BsContainer from 'react-bootstrap/Container'
import { Icon } from '@iconify/react'
import Form from 'react-bootstrap/Form';
import { Banner, Avatar, UserPopover, Bio, Hobbies, Privacy, DropdownButton } from 'my-profile'
import { Friends, Photos } from 'newsfeed'
import { Publisher, Modal } from 'publisher'
import { Container, PostModal } from 'post'

const MyProfile: NextPage = () => {

  const [show, setShow] = useState(false)
  const [privacy, setPrivacy] = useState("Public")
  const [ editWorkplace, setEditWorkplace ] = useState(false)
  const [ addWorkplace, setAddWorkplace ] = useState(false)
  const [ addCity, setAddCity ] = useState(false)
  const [ editSchool, setEditSchool ] = useState(false)
  const [ editCity, setEditCity ] = useState(false)

  const DropdownAllFriends = () => {
    return (
      <Dropdown className="dropdown-seamless">
        <Dropdown.Toggle>
          <div className="bg-gray-6 w-34px h-34px rounded-circle d-flex align-items-center justify-content-center cursor-pointer">
            <Icon icon="mdi:ellipsis-vertical" className="fs-20px text-base" />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3">
          <Dropdown.Item href="/account-settings" className="px-0 d-flex align-items-center mb-2">
            <Icon icon="gis:layer-alt-x-o" className="fs-20px me-2" />
            <div>Unfollow</div>
          </Dropdown.Item>
          <Dropdown.Item href="#" className="px-0 d-flex align-items-center mb-2">
            <Icon icon="lucide:user-x" className="fs-20px me-2" />
            <div>Unfriend</div>
          </Dropdown.Item>
          <Dropdown.Item href="#" className="px-0 d-flex align-items-center mb-2">
            <Icon icon="mdi:report" className="fs-20px me-2" />
            <div>Report</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
  
  const DropdownRespond = () => {
    return (
      <Dropdown className="dropdown-seamless">
        <Dropdown.Toggle>
          <div className="btn-mask w-100 w-md-auto btn-primary-light">Respond</div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3 w-200px">
          <Dropdown.Item href="/account-settings" className="px-0 d-flex align-items-center mb-2">
            <div className="me-2">
              <div className="w-38px h-38px rounded-circle bg-gray-1 d-flex align-items-center justify-content-center">
                <Icon icon="mdi:check" className="fs-20px" />
              </div>
            </div>
            <div>Confirm</div>
          </Dropdown.Item>
          <Dropdown.Item href="#" className="px-0 d-flex align-items-center mb-2">
            <div className="me-2">
              <div className="w-38px h-38px rounded-circle bg-gray-1 d-flex align-items-center justify-content-center">
                <Icon icon="lucide:trash-2" className="fs-20px" />
              </div>
            </div>
            <div>Delete Request</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
  
  const ButtonAction = ({ name, variant }) => {
    return (
      <Button className="w-100 w-md-auto" variant={variant}>{name}</Button>
    )
  }

  const headerFriendsList = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/35/35",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/36/36",
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc/37/37",
    },
    {
      id: 4,
      avatar: "https://i.pravatar.cc/38/38",
    },
    {
      id: 5,
      avatar: "https://i.pravatar.cc/39/39",
    },
  ]

  const TablistItem = [
    {
      label: 'Overview',
      icon: 'ic:round-grid-view',
    },
    {
      label: 'Work & Education',
      icon: 'material-symbols:book',
    },
    {
      label: 'Places lived',
      icon: 'material-symbols:location-on',
    }
  ]

  const RadioButton = (props:any) => {
    const { changed, id, isSelected, label, value, labelClassName, className, icon } = props;
    return (
      <div className={ className }>
        <label className={ "d-flex align-items-center cursor-pointer " + labelClassName} htmlFor={id}>
          <div className="d-flex">
            <div><Icon icon={icon} className="fs-20px me-2" /></div>
            <div>{label}</div>
          </div>
          <input id={id} onChange={changed} value={value} type="radio" checked={isSelected} />
        </label>
      </div>
    );
  }

  const radioChangeHandler = (e:any) => {
    setPrivacy(e.target.value);
  }

  return(
    <Layout>
      <Header />
      <Modal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        title="Select audience"
      >
        <RadioButton changed={radioChangeHandler} icon="mdi:globe" id="public" isSelected={privacy === "Public"} label="Public" value="Public" labelClassName="mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" />
        <RadioButton changed={radioChangeHandler} icon="ph:users-three-fill" id="friends" isSelected={privacy === "Friends"} label="Friends" value="Friends" labelClassName="mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" />
        <RadioButton changed={radioChangeHandler} icon="uis:padlock" id="private" isSelected={privacy === "Private"} label="Only Me" value="Private" labelClassName="mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" />
        <div className="mt-3 d-flex justify-content-end">
          <Button onClick={ () => setShow(false) } className="me-3" variant="light">Cancel</Button>
          <Button onClick={ () => setShow(false) }>Done</Button>
        </div>
      </Modal>
      <div className="bg-white w-100">
        <BsContainer>
          <Banner bannerImg="/images/default-cover.jpg" />
          <div className="d-md-flex justify-content-between align-items-center align-items-lg-end mt-lg-n50px border-bottom-1-solid-gray-6 pb-3">
            <div className="d-flex align-items-center align-items-lg-end mb-3 mb-md-0">
              <div className="me-3">
                <div className="w-90px h-90px w-lg-160px h-lg-160px rounded-circle bg-gray-1 border-5-solid-white position-relative">
                  <Avatar src="https://i.pravatar.cc/160/160" width={80} height={80} heightLg={150} widthLg={150} />
                  <div className="bg-gray-1 w-28px h-28px w-md-35px h-md-35px rounded-circle d-flex align-items-center justify-content-center cursor-pointer position-absolute bottom-0 end-0">
                    <Icon icon="mdi:camera" className="fs-16px fs-md-20px" />
                  </div>
                </div>
              </div>
              <div className="mb-lg-3">
                <div className="fw-700 fs-18px">Marc Quiano Umali</div>
                <div className="fw-600 text-gray-3 mb-lg-1">465 Friends</div>
                <div className="d-none d-md-block">
                  <div className="ms-2 d-flex">
                    { headerFriendsList.map( item => (
                      <div className="popupover ms-n10px" key={item.id}>
                        <Avatar src={item.avatar} width={35} height={35} imgClassName="border-2-solid-white" />
                        <UserPopover />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mb-lg-3">
              <Button className="me-3 w-50 w-md-140px">
                <Icon icon="mdi:plus-circle" className="fs-20px me-2" />
                <div>Add Story</div>
              </Button>
              <Button variant="light" className="w-50 w-md-140px">
                <Icon icon="mdi:pencil" className="fs-20px me-2" />
                <div>Edit Profile</div>
              </Button>
            </div>
          </div>
        </BsContainer>
      </div>
      <Tabs className="tabs-horizontal-responsive tabs-line">
        <div className="bg-white w-100 mb-4">
          <BsContainer>
            <div className="tab-list-reponsive">
              <TabList data-mobile-width={100}>
                <Tab>Post</Tab>
                <Tab>About</Tab>
                <Tab>Friends</Tab>
                <Tab>Photos</Tab>
                <Tab>Videos</Tab>
              </TabList>
            </div>
          </BsContainer>
        </div>
        <BsContainer className="mb-10">
          <TabPanel>
            <Row>
              <Col lg={5}>
                <div className="box-shadow-1 bg-white rounded-10px p-3 mb-3">
                  <Bio />
                  <Hobbies />
                </div>
                <Photos /> 
                <Friends />
              </Col>
              <Col lg={7}>
                <Publisher />
                <PostModal />
                <Container />
                <div className="box-shadow-1 bg-white rounded-10px p-3">
                  <div className="h-100px w-100 d-flex align-items-center justify-content-center text-center">
                    <div>
                      <div className="fw-700">No Post Available</div>
                      <div>This Profile was created last Nov 15, 2021</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPanel>
          <TabPanel>
          <Tabs className="tabs-icon-vertical-responsive tabs-line-disable">
            <Row className="h-100 w-100 m-0">
              <Col md={4} className="px-0 px-md-3">
                <div className="p-md-3 bg-md-white rounded-8px box-shadow-md-1">
                  <div className="tab-list-reponsive">
                    <TabList className="list-unstyled cursor-pointer">
                      { TablistItem.map( item => (
                        <Tab key={item.label}>
                          <div className="bg-gray-1 w-35px h-35px d-flex align-items-center justify-content-center rounded-circle text-primary me-3">
                            <Icon icon={item.icon} className="fs-22px" />
                          </div>
                          <div>{item.label}</div>
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="bg-white rounded-8px box-shadow-1">
                  <TabPanel>
                    <div className="p-3">
                      { editWorkplace ? 
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" value="Lifestream" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" value="Software Engineer" />
                          </Form.Group>
                          <div className="d-flex justify-content-between mb-3">
                            <Privacy label />
                            <div className="d-flex">
                              <Button variant="light" className="me-3" onClick={ () => setEditWorkplace(false) }>Cancel</Button>
                              <Button onClick={ () => setEditWorkplace(false) }>Save</Button>
                            </div>
                          </div>
                        </div> 
                        :
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <Icon icon="mdi:briefcase" className="fs-22px text-gray-4" />
                            </div>
                            <div>Software Engineer at ProSpark</div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Privacy />
                            <DropdownButton title="Workplace" onClick={ () => setEditWorkplace(true) }/>
                          </div>
                        </div>
                      }
                      { editSchool ? 
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Label>Studied at</Form.Label>
                            <Form.Control type="text" value="Datamex" />
                          </Form.Group>
                          <div className="d-flex justify-content-between mb-3">
                            <Privacy label />
                            <div className="d-flex">
                              <Button variant="light" className="me-3" onClick={ () => setEditSchool(false) }>Cancel</Button>
                              <Button onClick={ () => setEditSchool(false) }>Save</Button>
                            </div>
                          </div>
                        </div> 
                        :
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <Icon icon="material-symbols:book" className="fs-22px text-gray-4" />
                            </div>
                            <div>Studied at Datamex</div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Privacy />
                            <DropdownButton title="School" onClick={ () => setEditSchool(true) }/>
                          </div>
                        </div>
                      }
                      { editCity ? 
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Label>Lives in</Form.Label>
                            <Form.Control type="text" value="Pasig" />
                          </Form.Group>
                          <div className="d-flex justify-content-between mb-3">
                            <Privacy label />
                            <div className="d-flex">
                              <Button variant="light" className="me-3" onClick={ () => setEditCity(false) }>Cancel</Button>
                              <Button onClick={ () => setEditCity(false) }>Save</Button>
                            </div>
                          </div>
                        </div> 
                        :
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <Icon icon="material-symbols:location-on" className="fs-22px text-gray-4" />
                            </div>
                            <div>Lives in Pasig</div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Privacy />
                            <DropdownButton title="Current City" onClick={ () => setEditCity(true) }/>
                          </div>
                        </div>
                      }
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="p-3">
                      <div className="fw-700 fs-18px mb-3">Work</div>
                      <Button variant="outline-primary" className="d-flex align-items-center mb-3" onClick={ () => setAddWorkplace(!addWorkplace) }>
                        <div>
                          <Icon icon="material-symbols:add-circle-rounded" className="fs-24px me-2" />
                        </div>
                        <div className="fw-700">Add a workplace</div>
                      </Button>
                      { addCity && 
                        <div className="">
                          <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value="City" />
                          </Form.Group>
                          <div className="d-flex justify-content-between mb-3">
                            <Privacy label />
                            <div className="d-flex">
                              <Button variant="light" className="me-3" onClick={ () => setAddCity(!addCity) }>Cancel</Button>
                              <Button onClick={ () => setAddWorkplace(!addCity) }>Save</Button>
                            </div>
                          </div>
                        </div> 
                      }
                      { editWorkplace ? 
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" value="Lifestream" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" value="Software Engineer" />
                          </Form.Group>
                          <div className="d-flex justify-content-between mb-3">
                            <Privacy label />
                            <div className="d-flex">
                              <Button variant="light" className="me-3" onClick={ () => setEditWorkplace(false) }>Cancel</Button>
                              <Button onClick={ () => setEditWorkplace(false) }>Save</Button>
                            </div>
                          </div>
                        </div> 
                        :
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <Icon icon="mdi:briefcase" className="fs-22px text-gray-4" />
                            </div>
                            <div>Software Engineer at ProSpark</div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Privacy />
                            <DropdownButton title="Workplace" onClick={ () => setEditWorkplace(true) }/>
                          </div>
                        </div>
                      }
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="p-3">
                      <div className="fw-700 fs-18px mb-3">Places lived</div>
                      <Button variant="outline-primary" className="d-flex align-items-center mb-3" onClick={ () => setAddWorkplace(!addWorkplace) }>
                        <div>
                          <Icon icon="material-symbols:add-circle-rounded" className="fs-24px me-2" />
                        </div>
                        <div className="fw-700">Add city</div>
                      </Button>
                      { addWorkplace && 
                          <div className="">
                            <Form.Group className="mb-3">
                              <Form.Label>Company</Form.Label>
                              <Form.Control type="text" value="Company" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Position</Form.Label>
                              <Form.Control type="text" value="Position" />
                            </Form.Group>
                            <div className="d-flex justify-content-between mb-3">
                              <Privacy label />
                              <div className="d-flex">
                                <Button variant="light" className="me-3" onClick={ () => setAddWorkplace(!addWorkplace) }>Cancel</Button>
                                <Button onClick={ () => setAddWorkplace(!addWorkplace) }>Save</Button>
                              </div>
                            </div>
                          </div> 
                        }
                        { editCity ? 
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Label>Lives in</Form.Label>
                            <Form.Control type="text" value="Pasig" />
                          </Form.Group>
                          <div className="d-flex justify-content-between mb-3">
                            <Privacy label />
                            <div className="d-flex">
                              <Button variant="light" className="me-3" onClick={ () => setEditCity(false) }>Cancel</Button>
                              <Button onClick={ () => setEditCity(false) }>Save</Button>
                            </div>
                          </div>
                        </div> 
                        :
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <Icon icon="material-symbols:location-on" className="fs-22px text-gray-4" />
                            </div>
                            <div>Lives in Pasig</div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Privacy />
                            <DropdownButton title="Current City" onClick={ () => setEditCity(true) }/>
                          </div>
                        </div>
                      }
                    </div>
                  </TabPanel>
                </div>
              </Col>
            </Row>
          </Tabs>
          </TabPanel>
          <TabPanel>
            <div className="box-shadow-1 bg-white rounded-10px p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="fs-16px fs-md-18px fw-700">Friends</div>
                <div className="">
                  <Form.Group controlId="formBasicEmail" className="position-relative">
                    <Icon icon="lucide:search" className="fs-20px position-absolute top-0 bottom-0 my-auto ms-2" />
                    <Form.Control type="text" placeholder="Search" className="ps-6" />
                  </Form.Group>
                </div>
              </div>
              <Tabs className="tabs-horizontal-responsive tabs-line">
                <div className="tab-list-reponsive">
                  <TabList data-mobile-width={150}>
                    <Tab>All Friends</Tab>
                    <Tab>Followers</Tab>
                    <Tab>Following</Tab>
                    <Tab>Friend Request</Tab>
                    <Tab>Blocked Friends</Tab>
                  </TabList>
                </div>
                <TabPanel>
                  <div className="mx-n3">
                    <Row>
                      <Col lg={6} className="mb-4">
                        <div className="d-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px ">
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/100/100)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Jason Daro</div>
                              <div>175 Mutual</div>
                            </div>
                          </div>
                          <div>
                            <DropdownAllFriends />
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className="mb-4">
                        <div className="d-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px">
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/103/103)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Devin Stewart</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <DropdownAllFriends />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mx-n3">
                    <Row>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px ">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/104/104)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Kevin Rey Tabada</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <ButtonAction name="Add Friend" variant="primary-light"/>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/105/105)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Archere Dimaculangan</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <DropdownRespond />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mx-n3">
                    <Row>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px ">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/104/104)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Darwin Pineda</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <ButtonAction name="Cancel Request" variant="light" />
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/105/105)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700"></div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <ButtonAction name="Unfollow" variant="light" />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mx-n3">
                    <Row>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px ">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/104/104)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Kevin Rey Tabada</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <ButtonAction name="Confirm" variant="primary-light"/>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/105/105)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Archere Dimaculangan</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <ButtonAction name="Confirm" variant="primary-light"/>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mx-n3">
                    <Row>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px ">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/104/104)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Kevin Rey Tabada</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                            <ButtonAction name="Unblock" variant="light"/>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className="mb-4">
                        <div className="d-md-flex align-items-center justify-content-between bg-gray-7 p-3 rounded-10px">
                          <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="me-3">
                              <div className="w-60px w-md-100px pt-100p bg-gray-6 rounded-10px bg-center bg-cover" style={{ backgroundImage: "url(https://i.pravatar.cc/105/105)" }}></div>
                            </div>
                            <div>
                              <div className="fs-16px fs-md-18px fw-700">Archere Dimaculangan</div>
                              <div>175 Mutual Friends</div>
                            </div>
                          </div>
                          <div>
                          <ButtonAction name="Unblock" variant="light"/>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="box-shadow-1 bg-white rounded-10px p-3">
              <div className="h-100px w-100 d-flex align-items-center justify-content-center text-center">
                <div>
                  <div className="fw-700">Photos</div>
                  <div>Content will be available soon</div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="box-shadow-1 bg-white rounded-10px p-3">
              <div className="h-100px w-100 d-flex align-items-center justify-content-center text-center">
                <div>
                  <div className="fw-700">Videos</div>
                  <div>Content will be available soon</div>
                </div>
              </div>
            </div>
          </TabPanel>
        </BsContainer>
      </Tabs>
    </Layout>
  )
}

export default MyProfile;