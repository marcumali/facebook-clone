import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const imageList = [
	{ 
		id: 1,
		src: 'https://picsum.photos/500/500'
	},
	{ 
		id: 2,
		src: 'https://picsum.photos/501/501'
	},
	{ 
		id: 3,
		src: 'https://picsum.photos/502/502'
	},
	{ 
		id: 4,
		src: 'https://picsum.photos/503/503'
	},
	{ 
		id: 5,
		src: 'https://picsum.photos/504/504'
	},
	{ 
		id: 6,
		src: 'https://picsum.photos/505/505'
	}, 
]

const ImageMultiple = ({ }) => {
	return (
		<div className="mx-3">
			<Row className="grid-post">
				{ imageList.slice(0, 5).map((item: any, index:number)=>(
					<Col key={item.id} className={"pt-33p bg-gray-1 bg-center bg-cover position-relative " + ( "items-" + (imageList.length === 2  ? '2' : imageList.length === 4 ? '4': imageList.length === 5 || imageList.length >= 6 ? '5' : ''  ) ) } style={{ backgroundImage: `url( ${item.src} )` }}>
						{ 
							imageList.length >= 6 ?
							<div>+4</div>
							:
							''
						}
					</Col>
				))}
			</Row>
		</div>
	)
}


export default ImageMultiple
