import React from 'react'
import { NextPage } from 'next'
import { Header, Layout, SidebarMenuItems, Contacts } from 'newsfeed'
import { TabContainer } from 'account-settings'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const AccountSettings: NextPage = () => {

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
          <Col xl={12} xxl={10} className="mx-auto px-0 px-lg-3">
            <TabContainer />
          </Col>
        </Row>
      </div>
    </Layout>
  )
};

export default AccountSettings;