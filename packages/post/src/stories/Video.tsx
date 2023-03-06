import React from 'react'


const Video:React.FC<Props> = ({ src }) => {
	return (
    <div className="post-video">
			<video controls>
      	<source src={src} type="video/mp4"/>
     </video>
		</div>
	)
}

interface Props {
	src: any
}

export default Video
