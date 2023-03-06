import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Form from 'react-bootstrap/Form'
import Avatar from './Avatar';

const Friends = ({}) => {

  const listRef = useRef();

  const [RecentSearches, setRecentSearches] = useState([
    {
      id: 0,
      name: 'Jason Daro',
      avatar: 'https://i.pravatar.cc/32/32',
      link: '#'
    },
    {
      id: 1,
      name: 'Kevin Rey Tabada',
      avatar: 'https://i.pravatar.cc/33/33',
      link: '#'
    },
  ]);

  const removeItem = (id) => {
    const newList = RecentSearches.filter( (l) => l.id !== id );
    setRecentSearches( newList );
  };

  const [searchDrawer, setSearchDrawer] = useState(false);
  const showSearchDrawer = () => setSearchDrawer(!searchDrawer);

	return (
		<div>
      <div className="position-relative" onClick={showSearchDrawer}>
        <div className="d-flex d-md-none align-items-center text-white cursor-pointer mx-1 position-relative h-35px w-35px w-md-40px h-md-40px bg-primary-6 rounded-circle justify-content-center">
          <Icon icon="lucide:search" className="fs-16px fs-md-20px" />
        </div>
        <div className="d-none d-md-block position-relative">
          <Icon icon="lucide:search" className="position-absolute top-0 bottom-0 my-auto fs-18px ms-2" />
          <div className="rounded-100px cursor-pointer bg-white pe-3 py-2 ps-6 text-gray-4 w-170px">Search Koinonia</div>
        </div>
      </div>
      <div className={searchDrawer ? "d-block" : "d-none"}>
        <div className="position-fixed top-0 start-0 h-100 w-100 z-index-1020">
          <div className="mx-n3 h-100">
            <div className="h-100 d-flex">
              <div className="h-100 w-70 w-md-auto">
                <div className="p-3 bg-white box-shadow-1 w-280px w-md-350px h-100">
                  <div className="d-flex align-items-center mb-3">
                    <Icon icon="lucide:arrow-left" className="fs-26px me-2 me-md-3 cursor-pointer" onClick={showSearchDrawer}/>
                    <Form.Control type="text" placeholder="Search Koinonia" className="form-control-rounded cursor-pointer bg-gray-1 border-none py-2 py-md-3 px-3 px-md-4" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>Recent Searches</div>
                    <div className="text-danger cursor-pointer">Clear All</div>
                  </div>
                  <div ref={listRef}>
                    {RecentSearches.map(item => (
                      <div key={item.id}>
                        <Link href={item.link}>
                          <div className="d-flex align-items-center justify-content-between mb-3 cursor-pointer">
                            <div className="d-flex align-items-center">
                              <Avatar src={item.avatar} width={32} height={32} className="me-2" />
                              <div>{item.name}</div>
                            </div>
                            <Icon icon="lucide:x" className="fs-18px cursor-pointer" onClick={ ()=> removeItem(item.id) }/>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cursor-pointer h-100 w-100 w-md-100p" onClick={showSearchDrawer}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Friends
