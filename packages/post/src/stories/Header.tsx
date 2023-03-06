import React, {useState} from 'react'

import { Icon } from '@iconify/react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import PostModal from './PostModal'
import Check from './Check'
import Avatar from './Avatar'

const Header:React.FC<Props> = ({ userName, userAvatar, status }) => {

  const [isActive, setActive] = useState(false)
  const [isFollow, setFollow] = useState(false)
  const [show, setShow] = useState(false);

	return (
    <div>
      <PostModal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        title="Report this post"
      >
        <div className="fw-600">Please select a problem</div>
        <div>If someone is in immediate danger, get help before reporting to Koinonia. Don't wait.</div>
        <Row className="mt-3">
          <Col md={6} className="mb-3">
            <Check label="Nudity" name="report-post" id="nudity" />
          </Col>
          <Col md={6} className="mb-3">
            <Check label="Violence" name="report-post" id="violence" />
          </Col>
          <Col md={6} className="mb-3">
            <Check label="Terrorism" name="report-post" id="terrorism" />
          </Col>
          <Col md={6} className="mb-3">
            <Check label="Hate Speech" name="report-post" id="hate-speech" />
          </Col>
          <Col md={6} className="mb-3">
            <Check label="Harassment" name="report-post" id="Harassment" />
          </Col>
          <Col md={6} className="mb-3">
            <Check label="Something Else" name="report-post" id="something-else" />
          </Col>
          <Col>
            <Button className="w-100">Submit</Button>
          </Col>
        </Row>
      </PostModal>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <a href="#">
          <div className="d-flex align-items-center cursor-pointer">
            <Avatar src={userAvatar} height={40} width={40} />
            <div className="fw-600 mx-2">{userName}</div>
            <div className="text-gray-2">{status}</div>
          </div>
        </a>  
        <div>
          <Dropdown className="dropdown-seamless">
            <Dropdown.Toggle>
              <Icon icon="lucide:more-vertical" className="fs-20px cursor-pointer text-base" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#" className="d-flex align-items-center" onClick={ () => setActive(!isActive) }>
                {
                  isActive ? 
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <Icon icon="lucide:bookmark" className="fs-20px" />
                    </div>
                    <div>Save Post</div>
                  </div>
                  :
                  <div className="d-flex align-items-center text-primary">
                    <div className="me-2">
                      <Icon icon="material-symbols:bookmark-rounded" className="fs-20px" />
                    </div>
                    <div>Saved!</div>
                  </div>
                }
              </Dropdown.Item>
              <Dropdown.Item href="#" className="d-flex align-items-center" onClick={ () => setFollow(!isFollow) }>
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <Icon icon={isFollow ? 'lucide:user-x' : 'lucide:user-plus' } className="fs-20px" />
                  </div>
                  <div>{isFollow ? 'Unfollow' : 'Follow' }</div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#" className="d-flex align-items-center" onClick={() => setShow(true)}>
                <div className="me-2">
                  <Icon icon="lucide:alert-circle" className="fs-20px" />
                </div>
                <div>Report</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
	)
}

interface Props {
  userName: string
  userAvatar: string
  status?: string
}

export default Header
