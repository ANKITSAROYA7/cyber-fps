import React from 'react'
import { Container } from 'react-bootstrap'
import section2_pic from '../assets/images/s2-mainpic.png'

const Section2 = () => {
    return (
        <Container className='custom-container '>
            <h1 className='ff-audio fw-400  fs-64 text-center py-5 mt-5 mb-2 text-black position-relative green-line'>CyberFPS<span className='color-light-blue'> Gameplay</span></h1>
            <div className=' d-flex justify-content-center '>
                <img className='width-90 cursor-pointer' src={section2_pic} alt="#" />
            </div>
        </Container>
    )
}

export default Section2