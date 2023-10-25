import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cs_logo from '../assets/images/cs-logo.png'

const Section4 = () => {
    return (
       <div className=' bg-black py-5'>
         <Container className='custom-container py-5'>
            <Row className=' align-items-center'>
                <Col lg={6} className='d-flex justify-content-center justify-content-lg-start pb-4 pb-lg-0'>
                     <img className='w-87 ' src={cs_logo} alt="#"/>
                </Col>
                <Col lg={6}>
                    <h1 className='ff-audio fw-400  fs-64 text-white cyber-line position-relative'>CryptoStraps </h1>
                    <p className='ff-montserrat fs-16 line-hieght fw-400 opacity-75 line-hieght text-white'>CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
                </Col>
            </Row>
        </Container>
       </div>
    )
}

export default Section4