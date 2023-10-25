import React from 'react'
import footer_logo from '../assets/images/footer-logo.png'
import { Discord, Insta, Twitter } from './icons'
import { Container } from 'react-bootstrap'


const Footer = () => {
    return (
        <div className='bg-footer'>
            <Container className='custom-container'>
                <div className=' d-flex flex-column justify-content-center  align-items-center'>
                    <img src={footer_logo} alt="#" className='pt-4 ' />
                    <div className=' d-flex gap-3 pt-2 pb-4'>
                        <div className='cursor-pointer icon_hov'><Twitter /></div>
                        <span className='cursor-pointer icon_hov'><Insta /></span>
                        <div className='cursor-pointer icon_hov'><Discord /></div>
                    </div>
                </div>
            </Container>
            <div className='line'></div>
            <p className='ff-montserrat fs-16 line-h-150 fw-400 m-0 text-white py-3 text-center cursor-pointer' >© Cyber FPS 2022</p>
        </div>
    )
}

export default Footer