import React, { useState } from 'react'
import SendComment from './SendComment'
import Reactions from './Reactions'
import Avatar from './Avatar'

const Comment: React.FC<Props> = ({ userLink, userName, userComment, className, userAvatar  }) => {

	const [showReply, setShowReply] = useState(false)
	const [isActive, setActive] = useState(false)

	return (
    <div className={ "d-flex " + className }>
			<Avatar className="me-2" src={userAvatar} height={35} width={35} />
			<div className="w-100">
				<div className="bg-gray-1 px-2 py-1 rounded-6px d-inline-flex flex-column">
					<a href={userLink}>
						<div className="fw-600">{userName}</div>
					</a>
					<div>{userComment}</div>
				</div>
				<div className="d-flex">
					<div className="popupover">
						<div className={ 'me-2' + (isActive ? ' text-primary': '' ) } onClick={() => setActive(current => !current)}>Like</div>
						<div className="popover-content" data-inner-spacer={10} data-position-bottom={20} style={{ display: "none" }}>
							<Reactions />
						</div>
					</div>
					<div className="cursor-pointer" onClick={() => setShowReply(current => !current)}>Reply</div>
				</div>
				{showReply && (
					<SendComment />
				)}
			</div>
		</div>
	)
}

interface Props {
	className?: string
	userName: string
	userLink: string
	userComment: string
	userAvatar: string
}

export default Comment
