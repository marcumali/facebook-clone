import React, { useState, useRef, useEffect } from 'react'
import Contacts from './Contacts'
import { Icon } from '@iconify/react'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Avatar from './Avatar'
import TextareaAutosize from 'react-textarea-autosize'

const ContactDrawer = () => {

	const [showSearch, setShowSearch] = useState(false);
  const [minimize, setMinimize] = useState(false);

  const [state, setState] = useState({
    query: '',
    list: [],
  })

  const handleChange = (e) => {
    const results = userList.filter( post => {
      if ( e.target.value === "" ) return userList
      return post.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setState({
      query: e.target.value,
      list: results
    })
  }

	const userList = [
    {
			id: 1,
      name: 'Jason Daro',
			avatar: 'https:/i.pravatar.cc/35/35',
			hasMessage: true,
			status: 'bg-success-2',
    },
    {
			id: 2,
      name: 'Kevin Rey',
			avatar: 'https:/i.pravatar.cc/36/36',
			status: 'bg-success-2',
    },
    {
			id: 3,
      name: 'Devin Stewart',
			avatar: 'https:/i.pravatar.cc/37/37',
			hasMessage: true,
    },
		{
			id: 4,
      name: 'Darwin Pineda',
			avatar: 'https:/i.pravatar.cc/38/38',
    },
  ];


  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <div className="cursor-pointer" onClick={decoratedOnClick}>
        {children}
      </div>
    );
  }

  const CloseToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <Icon icon="pepicons-pop:times" onClick={decoratedOnClick} className="fs-22px cursor-pointer" />
    );
  }

  const messages = [
    {
      id: 0,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 1,
      message: <Icon icon="ant-design:like-filled" className="fs-24px text-primary" />,
      isLike: true,
    },
    {
      id: 2,
      message: "Odio accusantium ipsa in mollitia consectetur impedit optio, officiis cum delectus fuga ullam a veritatis deserunt maiores dolore et.",
    },
    {
      id: 3,
      message: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 4,
      message: "Officiis cum delectus fuga ullam a veritatis.",
    },
    {
      id: 5,
      message: "ullam a veritatis deserunt maiores dolore et",
    },
  ]

	return (
    <div className="h-100 overflow-y-scroll scrollbar-1">
			<div className="bg-white d-flex align-items-center justify-content-between p-3 box-shadow-1 position-sticky top-0">
        { showSearch ? <Form.Control type="text" placeholder="Search" className="form-control" onChange={handleChange} value={state.query}/>
          : <div className="fw-700 fs-16px">Contacts</div>
        }
        <div>
          <Icon icon={ (showSearch ? "pepicons-pop:times" : "ph:magnifying-glass-bold") } className={ "ms-2 cursor-pointer " + (showSearch ? "fs-22px" : "fs-18px") } onClick={ () => setShowSearch(!showSearch) } />
        </div>
      </div>
			<div className="p-3">
        <Accordion alwaysOpen>
          {(state.query === '' ? userList.map( item => (
            <CustomToggle key={item.id} eventKey={`${item.id}`}>
              <Contacts name={item.name} avatar={item.avatar} hasMessage={item.hasMessage} status={item.status} />
            </CustomToggle>
          )) : !state.list.length ? "User Not Found" : state.list.map( item => {
            return <CustomToggle key={item.id} eventKey={`${item.id}`}>
                    <Contacts name={item.name} avatar={item.avatar} hasMessage={item.hasMessage} status={item.status} />
                  </CustomToggle>
          }))}
          <div className="position-fixed bottom-0 start-0 w-100 d-flex justify-content-end align-items-end">
            {userList.map( item =>(
              <Accordion.Collapse eventKey={`${item.id}`} key={item.id}>
                <div className="w-280px bg-white box-shadow-1 rounded-top-x-10px ms-2">
                  <div className="bg-primary text-white d-flex align-items-center ps-2 pe-1 py-2 justify-content-between rounded-top-x-10px">
                    <div className="d-flex align-items-center">
                      <Avatar width={35} height={35} src={item.avatar} />
                      <div className="clamp clamp-1 ms-2">{item.name}</div>
                    </div>
                    <div className={ "d-flex " + (!minimize ? 'align-items-end' : 'align-items-center') }>
                      <div>
                        <Icon icon={ !minimize ? 'mdi:window-minimize' : 'mdi:window-maximize' } className="fs-18px cursor-pointer" onClick={ ()=> setMinimize(!minimize) }/>
                      </div>
                      <CloseToggle eventKey={`${item.id}`} />
                    </div>
                  </div>
                    { !minimize &&
                      <div>
                        <div className="h-250px scrollbar-1 overflow-y-auto">
                          <div className="px-3 pt-3">
                            { messages.map( (item, index) => (
                              <div>
                                { index%2 === 0 ?
                                  <div className="w-80p mb-2">
                                    { !item.isLike ?
                                      <div className="bg-gray-1 px-2 py-1 me-2 rounded-10px d-inline-flex">{item.message}</div> : 
                                      <>{item.message}</>
                                    }
                                  </div>
                                  :
                                  <div className="d-flex justify-content-end mb-2">
                                    { !item.isLike ?
                                      <div className="w-80p d-flex justify-content-end">
                                        <div className="text-white bg-primary px-2 py-1 me-2 rounded-10px d-inline-flex">
                                          {item.message}
                                        </div>
                                      </div> : 
                                      <>{item.message}</>
                                    }
                                  </div>
                                }
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="px-3 pb-3 pt-2">
                          <div className="d-flex align-items-end">
                            <TextareaAutosize maxRows={3} minRows={1} className="form-control w-100 me-2" />
                            <Form.Control type="text" className="me-2 d-none" placeholder="Write something here ..." />
                            <Icon icon="ant-design:like-filled" className="cursor-pointer fs-24px cursor-pointer text-primary mb-2" />
                          </div>
                        </div>
                      </div>
                    }
                </div>
              </Accordion.Collapse>
            ))}
            <div className="w-250px ms-3"></div>
          </div>
        </Accordion>
			</div>
		</div>
	)
}

export default ContactDrawer
