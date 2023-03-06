import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRouter } from 'next/router'

const Layout = ({children}: Props) => {

	const router = useRouter()

	return (
		<Container fluid className="h-100">
			<Row className="h-100">
				<Col lg={7} className="d-none d-lg-flex bg-base bg-center bg-cover" style={{ backgroundImage: 'url(images/entry-1.jpg)' }}></Col>
				<Col lg={5} className={ "d-flex align-items-center justify-content-center " + ( router.pathname == "/terms-and-condition" || router.pathname == "/privacy-policy" ? "px-0" : "" ) } >
					{children}
				</Col>
			</Row>
		</Container>
	)
}

interface Props {
	children: React.ReactNode
}

export default Layout
