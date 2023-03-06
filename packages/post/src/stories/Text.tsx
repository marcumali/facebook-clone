import React from 'react'
import emoji from 'react-easy-emoji'

const Text:React.FC<Props> = ({ value, className }) => {
	return (
    <div className={ "mb-1 " + className }>{emoji(value)}</div>
	)
}

interface Props {
	value: any
	className?: string
}

export default Text
