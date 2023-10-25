import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import team_member_1 from '../assets/images/team-member-1.png'
import team_member_2 from '../assets/images/team-member-2.png'
import team_member_3 from '../assets/images/team-member-3.png'
import team_member_4 from '../assets/images/team-member-4.png'

const Section5 = () => {
    return (
        <Container className='custom-container py-5 my-lg-5 '>
            <h1 className=' ff-audio fw-400  fs-64 text-center text-black m-0 pt-4 position-relative team-line1'>Team</h1>
            <Row className='py-5'>
                <Col sm={6} lg={3}  >
                    <img src={team_member_1} alt="#" className='cursor-pointer w-100 img-scale' />
                    <p className='ff-montserrat fw-600 fs-24 m-0 pt-3'>Collin</p>
                    <p className='fs-16 ff-montserrat fw-400 line-h-150'>Founder</p>
                </Col>
                <Col sm={6} lg={3}  >
                    <img src={team_member_2} alt="#" className='cursor-pointer w-100 img-scale' />
                    <p className='ff-montserrat fw-600 fs-24 m-0 pt-3'>Collin</p>
                    <p className='fs-16 ff-montserrat fw-400 line-h-150'>Founder</p>
                </Col>
                <Col sm={6} lg={3}  >
                    <img src={team_member_3} alt="#" className='cursor-pointer w-100 img-scale' />
                    <p className='ff-montserrat fw-600 fs-24 m-0 pt-3'>Collin</p>
                    <p className='fs-16 ff-montserrat fw-400 line-h-150'>Founder</p>
                </Col>
                <Col sm={6} lg={3}  >
                    <img src={team_member_4} alt="#" className='cursor-pointer w-100 img-scale' />
                    <p className='ff-montserrat fw-600 fs-24 m-0 pt-3'>Collin</p>
                    <p className='fs-16 ff-montserrat fw-400 line-h-150'>Founder</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Section5