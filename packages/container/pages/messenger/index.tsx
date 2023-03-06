import React from 'react'
import { NextPage } from 'next'
import { Header, Layout, SidebarMenuItems, Contacts } from 'newsfeed'
import { TabContainer } from 'messenger'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Messenger: NextPage = () => {

  return(
    <Layout>
      <Header />
      <div className="h-100 d-flex">
        <div className="bg-gray-1 d-none d-lg-block">
          <div className="w-250px px-3 pt-4">
            <SidebarMenuItems />
          </div>
        </div>
        <Row className="mx-auto w-100 justify-content-center">
          <Col className="px-3">
            <TabContainer />
          </Col>
        </Row>
      </div>
    </Layout>
  )
};

export default Messenger;