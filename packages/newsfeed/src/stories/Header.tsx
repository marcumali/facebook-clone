import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import SidebarMenuItems from './SidebarMenuItems'
import Search from './Search'
import FriendNotification from './FriendNotification'
import MessageNotification from './MessageNotification'
import ActivityNotification from './ActivityNotification'
import HeaderProfile from './HeaderProfile'

const Header = ({}) => {

  const [sidebar, setSetsidebar] = useState(false);
  const showSidebar = () => setSetsidebar(!sidebar);

  return(
    <div>
      <div className="h-54px"></div>
      <div className="py-2 px-3 bg-primary-5 position-fixed start-0 top-0 z-index-1030 w-100">
        <Row className="d-flex align-items-center">
          <Col xs={8} className="d-flex align-items-center">
            <div className="w-100 d-flex justify-content-lg-between">
              <div className="w-lg-50p">
                <div className="d-flex align-items-center">
                  <a href="/newsfeed">
                    <Image src="/images/logo-white.png" className="w-35px me-2 me-md-3 cursor-pointer" />
                  </a>
                  <Search />
                </div>
              </div>
              <div className="w-lg-50p d-none d-md-flex justify-content-center ms-2 ms-lg-0 align-items-center">
                <a href="/newsfeed">
                  <div className="d-flex align-items-center text-white cursor-pointer mx-1 mx-lg-3">
                    <Icon icon="mdi-house" className="fs-24px me-2" />
                    <div className="d-none d-md-block">Home</div>
                  </div>
                </a>
                <a href="/go-live">
                  <div className="d-flex align-items-center text-white cursor-pointer mx-1 mx-lg-3">
                    <Icon icon="mdi-video" className="fs-24px me-2" />
                    <div className="d-none d-md-block">Go Live</div>
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={4} className="justify-content-end d-flex align-items-center">
            <FriendNotification />
            <MessageNotification />
            <ActivityNotification />
            <HeaderProfile />
            <div>
              <Icon icon="uis-bars" onClick={showSidebar} className="fs-30px ms-2 text-white cursor-pointer d-lg-none"/>
            </div>
          </Col>
        </Row>
        <div className={sidebar ? "d-block" : "d-none"}>
          <div className="position-fixed top-0 start-0 h-100 w-100 z-index-1020">
            <div className="mx-n3 h-100">
              <Row className="h-100">
                <Col xs={8} sm={6} className="bg-white">
                  <div className="p-3" onClick={showSidebar}>
                    <Icon icon="mdi:close" className="fs-30px mb-3" />
                    <div>
                      <SidebarMenuItems className="test" />
                    </div>
                  </div>
                </Col>
                <Col xs={4} sm={6} className="bg-dark-opacity-7 cursor-pointer" onClick={showSidebar}></Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;