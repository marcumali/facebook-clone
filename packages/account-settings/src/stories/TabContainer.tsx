import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Icon } from '@iconify/react'
import GeneralSettings from './GeneralSettings'
import Profile from './Profile'
import Security from './Security'
import DeleteAccount from './DeleteAccount'

const TablistItem = [
  {
    label: 'General Settings',
    icon: 'mdi:cog',
  },
  {
    label: 'Profile',
    icon: 'mdi:user',
  },
  {
    label: 'Security',
    icon: 'mdi:shield',
  },
  {
    label: 'Delete Account',
    icon: 'mdi:trash',
  },
];

const TabContainer = ({}) => {

	return (
		<div className="w-100">
      <Container className="px-0 px-lg-3">
        <Tabs className="tabs-icon-vertical-responsive">
          <Row className="h-100 w-100 m-0">
            <Col md={{ span: 4, order: "last" }} className="pt-4 px-0 px-md-3">
              <div className="p-md-3 bg-md-white rounded-8px box-shadow-md-1">
                <div className="tab-list-reponsive">
                  <TabList className="list-unstyled cursor-pointer">
                    { TablistItem.map( item => (
                      <Tab>
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
            <Col md={{ span: 8, order: "first" }} className="pt-4">
              <div className="bg-white rounded-8px box-shadow-1">
                <TabPanel>
                  <GeneralSettings />
                </TabPanel>
                <TabPanel>
                  <Profile />
                </TabPanel>
                <TabPanel>
                  <Security />
                </TabPanel>
                <TabPanel>
                  <DeleteAccount />
                </TabPanel>
              </div>
            </Col>
          </Row>
        </Tabs>
      </Container>
    </div>
	)
}

export default TabContainer;
