import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import section3_pic from '../assets/images/s3-pic.png'

const Section3 = () => {
  return (
    <div className='bg-dots-s3 '>
      <Container className='custom-container py-custom-1'>
        <Row className=' align-items-center'>
          <Col lg={6}>
            <h1 className='ff-audio fw-400  fs-64 text-black'>What is <p className='color-light-blue cyber-line position-relative'>CyberFPS</p></h1>
            <p className='ff-montserrat fs-16 line-hieght fw-400 opacity-75 '>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
            <p className='ff-montserrat fs-16 line-hieght fw-400 opacity-75 '>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
          </Col>
          <Col lg={6}>
            <img className=' w-100' src={section3_pic} alt="#" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Section3