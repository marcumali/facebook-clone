import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import PostModal from './PostModal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Text from './Text'
import Image from './Image'
import Avatar from './Avatar'

const ShareToFeed = ({ }) => {
const [show, setShow] = useState(false);

	return (
    <div>
			<PostModal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        title="Share to Feed"
      >
        <div className="d-flex align-items-center cursor-pointer mb-3">
					<Avatar className="me-2" src={"https://i.pravatar.cc/41/41"} height={40} width={40} />
					<div className="fw-600">Marc Umali</div>
				</div>
				<Form.Control placeholder="What's on your mind?" as="textarea" rows={3} className="w-100" />
				<div className="bg-gray-7 rounded-8px mt-3 p-3">
					<Image src="https://picsum.photos/1000/600" />
					<div className="d-flex align-items-center cursor-pointer mb-1 mt-3">
						<Avatar className="me-2" src={"https://i.pravatar.cc/38/38"} height={35} width={35} />
						<div className="fw-600">Marc Umali</div>
					</div>
					<Text value="I really like this photo!" />
				</div>
				<Button onClick={ () => setShow(false) } className="mt-3 w-100">Share a post</Button>
      </PostModal>
			<div className="d-flex align-items-center" onClick={() => setShow(true)}>
				<div className="me-2">
					<Icon icon="lucide:edit" className="fs-18px cursor-pointer"/>
				</div>
				<div>Share To Feed</div>
			</div>
		</div>
	)
}

export default ShareToFeed
