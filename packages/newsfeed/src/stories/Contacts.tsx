import React, { useState, useEffect, useRef } from 'react'
import Avatar from './Avatar'

const Contacts: React.FC<Props> = ({ name, avatar, hasMessage, status }) => {

	return (
    <div className="d-flex align-items-center mb-2 cursor-pointer">
      <div className="d-flex align-items-center w-100">
        <Avatar width={35} height={35} src={avatar} hasMessage={hasMessage} />
        <div className={"ms-2 " + ( hasMessage && "fw-500" ) }>{name}</div>
        <div className={ "ms-auto w-8px h-8px rounded-circle " + status }></div>
      </div>
    </div>
	)
}

interface Props{
  name: string
  avatar: string
  hasMessage: boolean,
  status: string
}

Contacts.defaultProps = {
  status: "bg-gray-4",
}

export default Contacts
