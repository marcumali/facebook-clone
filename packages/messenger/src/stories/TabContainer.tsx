import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Avatar  from './Avatar'
import Conversation from './Conversation';

const TabContainer = ({}) => {

  const TablistItem = [
    {
      id: 1,
      name: 'Jason Daro',
      avatar: 'https://i.pravatar.cc/35/35',
      currentMessage: 'Hey! Did you just arrive here? How do you like it?',
      newMessage: 3,
      status: "bg-success-2",
    },
    {
      id: 2,
      name: 'Marc Umali',
      avatar: 'https://i.pravatar.cc/36/36',
      currentMessage: 'ipsum eveniet sapiente, ipsam nostrum assumenda pariatur ratione suscipit',
      status: "bg-gray-3",
    },
    {
      id: 3,
      name: 'Kevin Rey Tabada',
      avatar: 'https://i.pravatar.cc/37/37',
      currentMessage: 'dolorum fuga optio nam corporis iusto, incidunt dolore nemo in harum omnis?',
      status: "bg-success-2",
    },
    {
      id: 4,
      name: 'Archere Dimaculangan',
      avatar: 'https://i.pravatar.cc/38/38',
      currentMessage: 'incidunt dolore nemo in harum omnis',
      status: "bg-gray-3",
    },
  ];

	return (
		<div className="w-100 h-100">
      <Tabs className="h-100 tabs-h-100">
        <Row className="h-100 w-100 m-0">
          <Col md={5} lg={6} xl={4} className="py-4 px-0 px-md-3">
            <div className="bg-white rounded-8px box-shadow-1 h-100 position-relative">
              <div className="overflow-y-auto position-absolute h-100 top-0 start-0 w-100 p-3">
                <TabList className="list-unstyled cursor-pointer tabs-box">
                  { TablistItem.map( item => (
                    <Tab className="d-flex align-items-center">
                      <Avatar width={35} height={35} src={item.avatar} status={item.status} className="me-2" />
                      <div>
                        <div>{item.name}</div>
                        <div className="clamp clamp-1 text-gray-3 fs-12px">{item.currentMessage}</div>
                      </div>
                      { item.newMessage && 
                        <div className="ms-auto">
                          <div className="w-20px h-20px rounded-circle d-flex align-items-center justify-content-center bg-danger fs-10px text-white">3</div>
                        </div>
                      }
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>
          </Col>
          <Col md={7} lg={6} xl={8} className="py-4 d-none d-md-block">
            <div className="bg-white rounded-8px box-shadow-1 h-100">
              { TablistItem.map( item => (
                <TabPanel>
                  <Conversation userName={item.name} currentMessage={item.currentMessage} userStatus={item.status} />
                </TabPanel>
              ))}
            </div>
          </Col>
        </Row>
      </Tabs>
    </div>
	)
}

export default TabContainer;
