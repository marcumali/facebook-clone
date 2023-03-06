import React, {useState} from 'react'

import Header from './Header'
import Text from './Text'
import Image from './Image'
import BsImage from 'react-bootstrap/Image'
import Engagement from './Engagement'
import Item from './Item'
import CallToAction from './CallToAction'
import Video from './Video'
import SharedPost from './SharedPost'
import ImageMultiple from './ImageMultiple'
import PostModal from './PostModal'
import Avatar from './Avatar'
import { Icon } from '@iconify/react'
import Dropdown from 'react-bootstrap/Dropdown'

const postList = [
  {
    id: 1,
    username: "Marc Umali",
    useravatar: "https://i.pravatar.cc/40/40",
    text: "I really like this photo!",
    imagesrc: "https://picsum.photos/1000/600",
  },
  {
    id: 2,
    username: "Jason Daro",
    useravatar: "https://i.pravatar.cc/41/41",
    text: "Thank you Lord for another blessings",
  },
  {
    id: 3,
    username: "Kevin Rey Tabada",
    useravatar: "https://i.pravatar.cc/42/42",
    videosrc: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
  },
  {
    id: 4,
    username: "Devin Stewart",
    useravatar: "https://i.pravatar.cc/43/43",
    text: "Where is my coffee???!!!",
    imagesrc: "https://media2.giphy.com/media/M8ISSK5iSLbysOmYAw/giphy.gif",
  },
  {
    id: 5,
    username: "Darwin Pineda",
    useravatar: "https://i.pravatar.cc/43/43",
    text: "This is my first post shared.",
    sharedPost: true,
  },
  {
    id: 6,
    username: "Kallah Vista",
    useravatar: "https://i.pravatar.cc/44/44",
    text: "Multiple image uploads",
    imageMultiple: true,
  },
]

const Container = ({ }) => {

  const [isActive, setActive] = useState(false)
  const [isFollow, setFollow] = useState(false)
  const [show, setShow] = useState(false);

	return (
    <div>
      <PostModal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        title="Post Details"
        dialogClassName="modal-dialog-fluid mx-0"
      >
        <div className="d-lg-flex h-100">
          <div className="w-100 bg-black d-flex flex-column">
            <div className="d-flex p-3">
              <div className="me-3 bg-white w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2" onClick={ () => setShow(false) }>
                <Icon icon="lucide:x" className="fs-24px" />
              </div>
              <a href="/">
                <div className="w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer bg-primary-5 d-flex align-items-center justify-content-center">
                  <BsImage src="/images/logo-white.png" className="w-20px w-lg-30px cursor-pointer" />
                </div>
              </a>
            </div>
            <div className="d-flex align-items-center mt-auto justify-content-between mb-3 mb-lg-auto">
              <div className="mx-1 mx-lg-3">
                <div className="bg-gray-1 w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2">
                  <Icon icon="lucide:chevron-left" className="fs-24px" />
                </div>
              </div>
              <Image src="https://picsum.photos/1920/1080" className="maxh-500px" />
              <div className="mx-1 mx-lg-3">
                <div className="bg-gray-1 w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2">
                  <Icon icon="lucide:chevron-right" className="fs-24px" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-lg-400px p-3 d-flex flex-column h-100 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <a href="#">
                  <div className="d-flex align-items-center cursor-pointer">
                    <Avatar src="https://i.pravatar.cc/40/40" height={40} width={40} />
                    <div className="ms-2">
                      <div className="fw-600">Jason Daro</div>
                      <div className="text-gray-2 fs-12px">Dec. 25, 2022 at 9:09PM</div>
                    </div>
                  </div>
                </a>
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
              <div>
                <Text value="Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic ab veniam suscipit perspiciatis reiciendis incidunt velit praesentium, ex eos, sed magnam illum ipsam mollitia dolor earum maiores nostrum porro." />
              </div>
              <Engagement />
              <CallToAction commentContainerClass="overflow-y-auto position-lg-absolute top-0 start-0 w-100 h-100" />
            </div>
          </div>
        </div>
        
      </PostModal>
      { postList.map(item => (
        <Item key={item.id}>
          { item.sharedPost ? 
            <Header userAvatar={item.useravatar} userName={item.username} status="shared a post" />
            :
            <Header userAvatar={item.useravatar} userName={item.username} />
          }
          { item.text && <Text value={item.text} /> }
          { item.imagesrc && <Image src={item.imagesrc} onClick={() => setShow(true)}/> }
          { item.videosrc && <Video src={item.videosrc} /> }
          { item.sharedPost && <SharedPost /> }
          { item.imageMultiple && <ImageMultiple /> }
          <Engagement />
          <CallToAction />
        </Item>
      ))}
    </div>
	)
}

export default Container
