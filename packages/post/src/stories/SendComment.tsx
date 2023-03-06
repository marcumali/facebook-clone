import React from 'react'
import Form from 'react-bootstrap/Form';

import Avatar from './Avatar'

const sendComment = ({ }) => {
	return (
    <div className="d-flex align-items-center my-2">
			<Avatar className="me-2" src={"https://i.pravatar.cc/35/35"} height={35} width={35} />
			<Form.Control type="text" placeholder="Write a comment" className="w-100" />
		</div>
	)
}

export default sendComment
