import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import PostModal from './PostModal'
import Button from 'react-bootstrap/Button'


const ShareNow = ({ }) => {
const [show, setShow] = useState(false);

	return (
    <div>
			<PostModal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        title="Post Shared!"
      >
        <div className="fw-600">You've just shared a post</div>
        <div>Your shared post is displayed on your timeline and newsfeed</div>
				<Button onClick={ () => setShow(false) } className="mt-3 w-100">Okay!</Button>
      </PostModal>
			<div className="d-flex align-items-center" onClick={() => setShow(true)}>
				<div className="me-2">
					<Icon icon="lucide:forward" className="fs-18px cursor-pointer"/>
				</div>
				<div>Share Now</div>
			</div>
		</div>
	)
}

export default ShareNow
