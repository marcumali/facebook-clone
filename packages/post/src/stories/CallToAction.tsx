import React, {useState} from 'react'
import { Icon } from '@iconify/react'
import Dropdown from 'react-bootstrap/Dropdown'
import Link from 'next/link'
import SendComment from './SendComment';
import Reactions from './Reactions'
import ShareNow from './ShareNow';
import ShareToFeed from './ShareToFeed';
import Avatar from './Avatar'
import Comment from './Comment'

const CallToAction: React.FC<Props> = ({ commentContainerClass }) => {

	const [showComment, setShowComment] = useState(false)
	const [showPreviousComment, setPreviousComment] = useState(false)
	const [showReply, setShowReply] = useState(false)
	const [isActive, setActive] = useState(false);

	const CommentList = [
		{
			id: '1',
			name: 'Kevin Rey Tabada',
			avatar: 'https://i.pravatar.cc/36/36',
			link: '#',
			comment: 'Great! I like the photo.',
		},
		{
			id: '1',
			name: 'Jason Daro',
			avatar: 'https://i.pravatar.cc/37/37',
			link: '#',
			comment: 'Very nice',
		},
	];

	return (
		<div className="d-flex flex-column h-100">
			<div className="d-flex justify-content-evenly cursor-pointer border-top-1-solid-gray-4 pt-3">
				<div className="d-flex align-items-center popupover">
					<div className={ 'd-flex align-items-center' + (isActive ? ' text-primary': '' )} onClick={() => setActive(current => !current)}>
						<Icon icon="lucide:thumbs-up" className="fs-18px me-2" />
						<div>Like</div>
					</div>
					<div className="popover-content" data-inner-spacer={10} data-position-bottom={20} style={{ display: "none" }}>
						<Reactions />
					</div>
				</div>
				<div className="d-flex align-items-center cursor-pointer" onClick={() => setShowComment(current => !current)}>
					<Icon icon="lucide:message-circle" className="fs-18px me-2" />
					<div>Comment</div>
				</div>
				<div className="d-flex align-items-center">
					<Dropdown className="dropdown-seamless">
						<Dropdown.Toggle>
							<div className="d-flex align-items-center cursor-pointer text-base">
								<Icon icon="lucide:share-2" className="fs-18px me-2" />
								<div>Share</div>
							</div>
						</Dropdown.Toggle>
						<Dropdown.Menu className="p-3 w-200px">
							<Dropdown.Item href="#" className="d-flex align-items-center px-0">
								<ShareNow />
							</Dropdown.Item>
							<Dropdown.Item href="#" className="d-flex align-items-center px-0">
								<ShareToFeed />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
			<div className={ "fw-600 cursor-pointer my-2 " + (showPreviousComment ? 'd-none': 'd-block') } onClick={() => setPreviousComment(current => !current)}>2 Previous Comments</div>
			{showComment && (
					<SendComment />
				)
			}
			<div className="h-100 position-relative">
				<div className={commentContainerClass}>
					{showPreviousComment && (
						<div className="mt-3">
							{ CommentList.map( item => (
								<Comment userName={item.name} userComment={item.comment} className="mb-3" userAvatar={item.avatar} userLink={item.link} />
							))}
						</div>
						)
					}
					<Comment userName="Devin Stewart" userComment="This is Awesome!" userAvatar="https://i.pravatar.cc/38/38" userLink="#" />
				</div>
			</div>
		</div>
	)
}

interface Props {
	commentContainerClass?: string
}

export default CallToAction
