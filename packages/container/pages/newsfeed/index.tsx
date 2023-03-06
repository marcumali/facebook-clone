import React, { useState } from 'react'
import { NextPage } from 'next'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import { Header, Layout, SidebarMenuItems, Friends, ContactDrawer, Photos } from 'newsfeed'
import { Container, PostModal, Avatar, Reactions } from 'post'
import { Publisher } from 'publisher'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Modal from 'react-bootstrap/Modal';
import BsImage from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'

const Newsfeed: NextPage = () => {

  const storyList = [
    {
      id: 1,
      post: "https://picsum.photos/160/160",
      name: "Jason Daro",
      avatar: "https://i.pravatar.cc/30/30",
    },
    {
      id: 2,
      post: "https://picsum.photos/161/161",
      name: "Devin Stewart",
      avatar: "https://i.pravatar.cc/31/31",
    },
    {
      id: 3,
      post: "https://picsum.photos/162/162",
      name: "Kevin Rey Tabada",
      avatar: "https://i.pravatar.cc/32/32",
    },
    {
      id: 4,
      post: "https://picsum.photos/163/163",
      name: "Darwin Pineda",
      avatar: "https://i.pravatar.cc/33/33",
    },
    {
      id: 5,
      post: "https://picsum.photos/164/164",
      name: "Archere Dimaculangan",
      avatar: "https://i.pravatar.cc/34/34",
    },
  ]

  const imageSlider = [
    {
      id: 1,
      src: "/images/contacts-slide-1.jpg",
      url: "https://koinonia.social"
    },
    {
      id: 2,
      src: "/images/contacts-slide-2.jpg",
      url: "http://enspirely.com/"
    },
    {
      id: 3,
      src: "/images/contacts-slide-3.jpg",
      url: "https://godveo.com"
    },
    {
      id: 4,
      src: "/images/contacts-slide-4.jpg",
      url: "http://holla.club"
    },
    {
      id: 5,
      src: "/images/contacts-slide-5.jpg",
      url: "http://womanity.social/"
    },
  ]

  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Layout>
      <Header />
      <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-fluid mx-0" contentClassName="bg-black">
        <div className="d-flex p-3">
          <div className="me-3 bg-white w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2" onClick={ handleClose }>
            <Icon icon="lucide:x" className="fs-24px" />
          </div>
          <Link href="#">
            <div className="w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer bg-primary-5 d-flex align-items-center justify-content-center">
              <BsImage src="/images/logo-white.png" className="w-20px w-lg-30px cursor-pointer" />
            </div>
          </Link>
        </div>
        <div className="my-auto h-100">
          <div className="h-100 w-100 d-flex justify-content-center">
            <div className="d-flex flex-column w-100 w-md-auto px-md-3">
              <div className="w-md-500px rounded-10px bg-white bg h-100 bg-gray-2 d-flex flex-column position-relative mx-3">
                <div className="bg-gray-1 w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2 position-absolute z-index-1010 top-0 bottom-0 my-auto start-0 ms-md-n60px ms-3">
                  <Icon icon="lucide:chevron-left" className="fs-24px" />
                </div>
                <div className="bg-gray-1 w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2 position-absolute z-index-1010 top-0 bottom-0 my-auto end-0 me-md-n60px me-3">
                  <Icon icon="lucide:chevron-right" className="fs-24px" />
                </div>
                <div className="mx-n3 d-flex w-100 py-3 px-3 position-relative z-index-1010">
                  <div className="w-100 bg-gray-4 mx-1 rounded-10px overflow-hidden">
                    <div className="bg-white h-5px rounded-10px" style={{ width: "60%" }}></div>
                  </div>
                  <div className="w-100 bg-gray-4 mx-1 rounded-10px overflow-hidden">
                    <div className="bg-white h-5px rounded-10px" style={{ width: 0 }}></div>
                  </div>
                  <div className="w-100 bg-gray-4 mx-1 rounded-10px overflow-hidden">
                    <div className="bg-white h-5px rounded-10px" style={{ width: 0 }}></div>
                  </div>
                </div>
                <div className="px-3 d-flex justify-content-between position-relative z-index-1010">
                  <Avatar src="https://i.pravatar.cc/35/35" height={35} width={35} />
                  <div className="d-flex align-items-center cursor-pointer">
                    <div className="d-flex align-items-center justify-content-center bg-white w-35px h-35px rounded-circle">
                      <Icon icon={ toggle ? "material-symbols:pause-rounded" : "material-symbols:play-arrow-rounded" } className="fs-24px text-base" onClick={ () => setToggle(!toggle) }/>
                    </div>
                    <Dropdown className="dropdown-seamless ms-2">
                      <Dropdown.Toggle>
                        <div className="d-flex align-items-center justify-content-center bg-white w-35px h-35px rounded-circle">
                          <Icon icon="ic:outline-more-horiz" className="fs-26px cursor-pointer text-base" />
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="end">
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
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden rounded-10px">
                  <BsImage src="https://picsum.photos/1080/1920" className="cursor-pointer w-100" />
                </div>
              </div>
              <div className="pb-2 pt-1 mt-2">
                <div className="overflow-x-auto">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="position-relative w-100 ms-3 me-2">
                      <Icon icon="lucide:send" className="cursor-pointer text-white position-absolute fs-18px top-0 bottom-0 my-auto end-0 me-3" />
                      <input type="text" className="bg-black text-white rounded-100px ps-3 pe-7 py-2 border-1-solid-white w-100 placeholder-white" placeholder="Write something ..." />
                    </div>
                    <Reactions />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="h-100 d-flex">
        <div className="bg-gray-1 d-none d-lg-block">
          <div className="w-250px h-100 position-relative">
            <div className="p-3 position-fixed h-100 top-0 w-250px">
              <div className="h-54px"></div>
              <SidebarMenuItems />
            </div>
          </div>
        </div>
        <div className="w-100">
          <Col xl={12} xxl={10} className="mx-auto">
            <Row className="h-100 w-100 m-0">
              <Col md={7} className="p-0">
                <div className="p-3">
                  <div className="box-shadow-1 bg-white rounded-10px mb-4">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={3.5}
                      className="swiper-slide-h-auto py-3 px-2"
                    >
                      <SwiperSlide>
                        <input type="file" className="opacity-0 position-absolute top-0 start-0 w-100 h-100 cursor-pointer z-index-1010" />
                        <div className="h-100 bg-gray-1 rounded-10px d-flex flex-column box-shadow-1 mx-1">
                          <div className="h-100 bg-center bg-cover rounded-top-x-10px" style={{ backgroundImage: `url( "https://i.pravatar.cc/150/200" )` }}></div>
                          <div className="bg-white px-2 pb-2 pb-md-3 pt-4 rounded-bottom-x-10px text-center position-relative">
                            <div className="w-30px h-30px rounded-circle text-white bg-primary d-flex align-items-center justify-content-center position-absolute top-0 start-0 end-0 mx-auto mt-n15px">
                              <Icon icon="lucide:plus" className="fs-20px"/>
                            </div>
                            <div className="fs-12px fs-md-14px">Create Story</div>
                          </div>
                        </div>
                      </SwiperSlide>
                      { storyList.map( item => (
                        <SwiperSlide key={item.id} onClick={handleShow}>
                          <div className="pt-100p bg-gray-1 rounded-10px px-2 pb-2 position-relative mx-1 bg-center bg-cover cursor-pointer" style={{ backgroundImage: `url( ${item.post} )` }}>
                            <div className="bg-gray-3 rounded-circle bg-center bg-cover top-8px position-absolute border-2-solid-white" data-width={30} data-height={30} style={{ backgroundImage: `url( ${item.avatar} )` }}></div>
                            <div className="text-white text-shadow-1 clamp clamp-1">{item.name}</div>
                          </div>
                      </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <Publisher />
                  <PostModal /> 
                  <Container />
                </div>
              </Col>
              <Col md={5} className="p-0 d-none d-md-block">
                <div className="p-3 position-sticky top-54px">
                  <Friends />
                  <Photos /> 
                </div>
              </Col>
            </Row>
          </Col>
        </div>
        <div className="d-none d-xl-block ms-3">
          <div className="w-250px h-100 position-relative">
            <div className="bg-white position-fixed h-100 top-0 d-flex flex-column">
              <div className="h-84px"></div>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  className="w-250px mx-0 swiper-pagination-bottom-0 h-490px"
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                  }}
                >
                  { imageSlider.map( item => (
                    <SwiperSlide key={item.id}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <BsImage src={item.src} fluid/>
                      </a>
                    </SwiperSlide>
                  )) }
                </Swiper>
                <ContactDrawer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Newsfeed;